module.exports = {
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PWD || "postgres", 
  database: "tasks_app",
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 5433,
  dialect: "postgres",
};
