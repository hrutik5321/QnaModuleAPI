const Query = require("../model/Query");
const Response = require("../model/Response");

exports.postResponse = async (req, res) => {
  try {
    const response = new Response({
      ...req.body,
      userId: req.auth._id,
    });
    await response.save();
    const query = await Query.findById({
      _id: response.queryId,
    });
    await query.response.push(response);
    await query.save();
    return res.status(200).json({
      response,
      query,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
