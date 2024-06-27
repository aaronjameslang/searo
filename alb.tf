resource "aws_lb_target_group" "searo_tf_httpd" {
  name        = "searo-tf-httpd"
  port        = 80
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = aws_vpc.app_vpc.id

#   health_check {
#     enabled = true
#     path    = "/health"
#   }

  depends_on = [aws_alb.searo_tf_httpd]
}

resource "aws_alb" "searo_tf_httpd" {
  name               = "searo-tf-httpd-lb"
  internal           = false
  load_balancer_type = "application"

  subnets = [
    aws_subnet.public_a.id,
    aws_subnet.public_b.id,
  ]

  security_groups = [
    aws_security_group.http.id,
    aws_security_group.https.id,
    aws_security_group.egress_all.id,
  ]

  depends_on = [aws_internet_gateway.igw]
}

resource "aws_alb_listener" "searo_tf_httpd_http" {
  load_balancer_arn = aws_alb.searo_tf_httpd.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.searo_tf_httpd.arn
  }
}

output "alb_url" {
  value = "http://${aws_alb.searo_tf_httpd.dns_name}"
}
