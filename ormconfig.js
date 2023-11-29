/* This file will be used at some point to config the database */

var dbConfig = {
    synchronize: false,
    migrations: ['migrations/*.js'],
    cli: {
        migrationsDir: migrations
    },
}

switch (process.env.NODE_ENV) {
    case 'development':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: ['**/*.entity.js'],
        })
        break;
    case 'production':
        break;
    default:
        throw new Error('ambiente desconocido')
}

module.exports = dbConfig;