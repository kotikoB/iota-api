import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true, // BAD FOR PROD! - use migrations instead
};

export default config;
