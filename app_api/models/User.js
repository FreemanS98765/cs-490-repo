const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  notificationsEnabled: {
    type: Boolean,
    default: true,
  },
});

// Create the User model
const User = mongoose.model("User", UserSchema);

module.exports = User;
