module.exports = {
  test: {
    host: 'localhost',
    database: 'housemate_test',
    user: 'postgres',
    password: 'password',
    port: '5432'
  },
  development: {
    host: 'localhost',
    database: 'housemate_dev',
    user: 'postgres',
    password: 'password',
    port: '5432'
  },
  production: {
    host: 'localhost',
    database: 'housemate',
    user: 'postgres',
    password: 'password',
    port: '5432'
  }
};
