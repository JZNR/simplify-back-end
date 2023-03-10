const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const noteSchema = new Schema({
  title: String,
  description: String,
  pinned: Boolean,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Note", noteSchema);
