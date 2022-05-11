postgres:
	docker run --name postgres_type -p 5440:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=password -d postgres:12-alpine
migrate:
	 ./node_modules/.bin/db-migrate create init-schema
migrateup:
	./node_modules/.bin/db-migrate up --verbose
migratedown:
	./node_modules/.bin/db-migrate down --verbose
migratereset:
	./node_modules/.bin/db-migrate reset