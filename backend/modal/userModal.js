const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

const userModal = model("usermodal", userSchema);
module.exports = {
  userModal,
};
