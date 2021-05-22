module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'ccfoundation'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE'),
        ssl: env('DATABASE_SSL'),
      },
    },
  },
});
