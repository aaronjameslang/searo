install:
	npm install

docker:
	docker compose up

test:
	(cd e2e && npm run e2e)

build:
	sudo docker build ./ui -t public.ecr.aws/t9e1i3s4/searo:ui

run-ui:
	sudo docker run -p 3000:3000 public.ecr.aws/t9e1i3s4/searo:ui

debug-ui:
	sudo docker run -it -p 3000:3000 public.ecr.aws/t9e1i3s4/searo:ui bash
