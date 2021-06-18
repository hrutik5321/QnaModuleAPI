const router = require("express").Router();
const { postResponse } = require("../controllers/response");
const { isSignin } = require("../controllers/auth");

router.post("/postresponse", isSignin, postResponse);

module.exports = router;
