const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if(process.env.NODE_ENV === "development"){
    router.post("/create", function(req, res){
        res.send("hey its working")
    })
};

router.get("/", function(req,res){
    res.send("hey");
});

module.exports = router;