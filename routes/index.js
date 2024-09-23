const express = require("express");
const router = express.Router();
const isLoggenin = require("../middlewares/isLoggedin");
const productModel = require("../models/product-model");

router.get("/", function(req, res){
    let error = req.flash("error");
    res.render("index", { error, loggedin: false });
});

router.get("/shop", isLoggenin, async function(req, res){
    let products = await productModel.find();
    res.render("shop", {products});
})

module.exports=router;