export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtExpirationTime: process.env.JWT_EXPIRATION_TIME,
});
