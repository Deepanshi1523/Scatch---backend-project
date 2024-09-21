const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    const errorMessage = req.query.error || '';
    res.render("index", { error: errorMessage});
});

module.exports=router;