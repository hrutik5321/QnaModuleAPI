const router = require("express").Router();
const { postQuery } = require("../controllers/query");
const { isSignin } = require("../controllers/auth");

router.get("/test", isSignin, (req, res) => {
  return res.status(200).json({
    message: "Query Route Is Working",
  });
});

//POST QUERY
router.post("/askquery", isSignin, postQuery);

module.exports = router;
