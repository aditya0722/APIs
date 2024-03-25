const express = require("express");
const router=express.Router();

router.route("/").get(getAllProduct);
router.route("/testing").get(getAllProductTesting);


module.exports= router;