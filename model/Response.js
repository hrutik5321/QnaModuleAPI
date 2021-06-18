const mongoose = require("mongoose");
const responseSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    queryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Query",
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Response", responseSchema);
