const express = require("express");
const session = require("express-session");
const redis = require("redis");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const { body, validationResult } = require("express-validator");

// redis session store
const RedisStore = require("connect-redis")(session);
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379,
});

redisClient.on("error", function (err) {
  console.log("Could not establish a connection with redis. " + err);
});
redisClient.on("connect", function (err) {
  console.log("Connected to redis successfully");
});

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECERT || "sessionSecert",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // if true only transmit cookie over https
      httpOnly: false, // if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60 * 10, // session max age in miliseconds
    },
  })
);

app.get("/", (req, res) => {
  const views = req.session.views++;
  res.send(views);
});

const run = async () => {
  const mongooseConnection = await mongoose.connect(
    process.env.MONGO_URL || "mongodb://localhost:27017/tsc-backend"
  );

  const port = process.env.PORT || 8081;
  app.listen(port, () =>
    console.log(`Node js Backend listening on http://localhost:${port} !`)
  );
};

run();
