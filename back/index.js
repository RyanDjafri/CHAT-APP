const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth/auth.routes");
const userRoutes = require("./routes/user/user.routes");
// config
require("dotenv").config({
  path: "./config/.env",
});
require("./config/db");
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// API
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.listen(process.env.PORT, () => {
  console.log("Listening on port : ", process.env.PORT);
});
