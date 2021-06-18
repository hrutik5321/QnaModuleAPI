const User = require("../model/User");
const Query = require("../model/Query");

exports.postQuery = (req, res) => {
  const query = new Query({
    ...req.body,
    userId: req.auth._id,
  });

  query.save((err, query) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      query,
    });
  });
};
