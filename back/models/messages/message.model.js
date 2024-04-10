const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  posterId: {
    type: String,
  },
  message: {
    type: String,
  },
  picture: {
    type: String,
  },
  likers: {
    type: [String],
  },
});

module.exports = mongoose.model("message", messageSchema);
