/*
run server.js on terminal: node server.js
end: CTRL+C
*/ 
const express = require('express'); // access to the express library by searching your node_modules for "express"
const app = express(); // creates an instance of the express constructor

app.listen(8000,function(){ // port:node8000
    console.log("server is running")
})

