## Running the app
## ** prerequisite **
1. Setup database and it's client like pgadmin or dbever
2. Install Node Js LTS version
3. Get .env file from developer team and put on root level
   then yarn start will setup DB in postgresql and

```bash

# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

```

## Creating module, controller, service, dto, entity
$ nest g resource <name>
###### ex. nest g resource users => it will create module, controller, service, dto, entity for users
Reference - https://docs.nestjs.com/cli/usages

## Commands to create migration
ex. yarn migration:create tableName -d location
- yarn migration:create CreateSchemasTable -d src/database/migrations
- yarn migration:create CreateQuestionsTable -d src/database/migrations/questions
- yarn migration:create CreateGoalsTable -d src/activities/migrations
- yarn migration:create CreateUserActivitiesTable -d src/database/migrations/activity-trackers
- yarn run migration:run

## Command to revert single migration
- yarn run migration:revert

