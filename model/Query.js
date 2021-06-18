const mongoose = require("mongoose");
const querySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    query: {
      type: String,
      required: true,
    },
    response: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Response",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
