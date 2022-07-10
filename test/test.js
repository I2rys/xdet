"use strict";

// Dependencies
const express = require("express")
const xdet = require("../index")

// Variables
const web = express()
const port = process.env.PORT || 8080

// Main
web.use("", function(req, res){
    const detections = xdet.detectExpress(req)

    console.log(req.query)
    console.log(detections)

    res.send("home")
})

web.listen(port, ()=>{
    console.log(`Website is running. ${port}`)
})