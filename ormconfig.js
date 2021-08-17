// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const defaultConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
module.exports = {
  ...defaultConfig,
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: [__dirname + '/src/**/*.entity.ts'],
  migrations: ['src/users/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migration-track',
  migrationsRun: true,
  subscribers: ['subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/subscriber',
  },
};
