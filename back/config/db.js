const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://RyanDjafri:09022002@cluster0.n0zszdh.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect", err);
  });
