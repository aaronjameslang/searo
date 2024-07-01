install:
	npm install

docker:
	docker compose up

test:
	(cd e2e && npm run e2e)

build:
	sudo docker build ./ui -t public.ecr.aws/t9e1i3s4/searo:ui
	sudo docker build ./api -t public.ecr.aws/t9e1i3s4/searo:api

run-ui:
	sudo docker run -p 3000:3000 public.ecr.aws/t9e1i3s4/searo:ui

run-api:
	sudo docker run -p 3080:3080 public.ecr.aws/t9e1i3s4/searo:api

debug-ui:
	sudo docker run -it -p 3000:3000 public.ecr.aws/t9e1i3s4/searo:ui bash
