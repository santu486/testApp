const env = process.env;

// needs to enter this file to gitignore 
// db credentials 
// try to use connection pooling 
// try to use the orm 
// do some validation  
const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || "localhost",
    port: env.DB_PORT || "5432",
    user: env.DB_USER || "postgres",
    password: env.DB_PASSWORD || "root",
    database: env.DB_NAME || "testdb",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
