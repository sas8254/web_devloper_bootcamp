const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username cannot be blanck!"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank!"],
  },
});
module.exports = mongoose.model("User", userSchema);
