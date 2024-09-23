const express = require("express");
const router = express.Router();
const isLoggenin = require("../middlewares/isLoggedin")

router.get("/", function(req, res){
    let error = req.flash("error");
    res.render("index", { error });
});

router.get("/shop", isLoggenin, function(req, res){
    res.render("shop");
})

router.get("/logout", isLoggenin, function(req, res){
    res.render("/");
})

module.exports=router;