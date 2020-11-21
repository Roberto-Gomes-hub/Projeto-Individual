module.exports = {
  production: {
    username: 'roberto.luiz',
    password: '#Gf45008802836',
    database: 'projeto',
    host: 'roberto-luiz.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
