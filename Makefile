all: setup up

setup: npm

npm:
	npm install

up:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose -f docker-compose.yml down
	echo y | docker system prune --volumes
	docker image rm loopback-4-testing_application
