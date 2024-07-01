provider "aws" {
  region  = "eu-west-2"
  profile = "terraform_user"
}

terraform {
  required_version = ">= 1.0"

  backend "s3" {
    bucket  = "searo-terraform"
    key     = "terraform.tfstate"
    region  = "eu-west-2"
    profile = "terraform_user"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.69.0"
    }
  }
}

resource "aws_ecs_service" "searo-tf-httpd" {
  name            = "searo-tf-httpd"
  task_definition = aws_ecs_task_definition.searo-tf-httpd.arn
  launch_type     = "FARGATE"
  cluster         = aws_ecs_cluster.searo-tf-httpd.id
  desired_count = 1

  network_configuration {
   assign_public_ip = false

   security_groups = [
     aws_security_group.egress_all.id,
     aws_security_group.ingress_api.id,
   ]

   subnets = [
     aws_subnet.private_a.id,
     aws_subnet.private_b.id,
   ]
 }

 load_balancer {
   target_group_arn = aws_lb_target_group.searo_tf_httpd.arn
   container_name   = "searo-tf-httpd"
   container_port   = "3000"
 }
}

resource "aws_cloudwatch_log_group" "searo-tf-httpd" {
  name = "/ecs/searo-tf-httpd"
}

resource "aws_ecs_task_definition" "searo-tf-httpd" {
  family = "searo-tf-httpd"

  container_definitions = <<EOF
  [
    {
      "name": "searo-tf-httpd",
      "image": "public.ecr.aws/t9e1i3s4/searo:ui",
      "portMappings": [
        {
          "containerPort": 3000
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-region": "eu-west-2",
          "awslogs-group": "/ecs/searo-tf-httpd",
          "awslogs-stream-prefix": "ecs"
        }
      },
      "healthCheck": {
        "command": [
          "CMD-SHELL",
          "(wget -O - localhost:3000 | grep html) || exit 1"
        ]
      }
    }
  ]
  EOF

  # These are the minimum values for Fargate containers.
  cpu = 256
  memory = 512
  requires_compatibilities = ["FARGATE"]

  # This is required for Fargate containers (more on this later).
  network_mode = "awsvpc"

  execution_role_arn = aws_iam_role.searo_httpd_task_execution_role.arn
}

resource "aws_iam_role" "searo_httpd_task_execution_role" {
  name               = "searo-httpd-task-execution-role"
  assume_role_policy = data.aws_iam_policy_document.ecs_task_assume_role.json
}

data "aws_iam_policy_document" "ecs_task_assume_role" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

data "aws_iam_policy" "ecs_task_execution_role" {
  arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role" {
  role       = aws_iam_role.searo_httpd_task_execution_role.name
  policy_arn = data.aws_iam_policy.ecs_task_execution_role.arn
}

resource "aws_ecs_cluster" "searo-tf-httpd" {
  name = "searo-tf-httpd"
}
