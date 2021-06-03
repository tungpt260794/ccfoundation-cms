module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", env("PORT")),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "86ede22715db2b27a9eaa53503720a2b"),
    },
  },
});
