// ./lib/get-session.js
import nextSession from "next-session";

const session = require("express-session");
const redis = require("redis");
const connectRedis = require("connect-redis");
const RedisStore = connectRedis(session);

//Configure redis client
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
});
redisClient.on("error", function (err: string) {
  console.log("Could not establish a connection with redis. " + err);
});
redisClient.on("connect", function () {
  console.log("Connected to redis successfully");
});

// TODO: is this correct? this is giving error on my end
export const getSession = nextSession({
  secret: process.env.SESSION_SECRET || "secret",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },

  // redis session store
  store: new RedisStore({ client: redisClient }),
});
