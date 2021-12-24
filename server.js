/*
run server.js on terminal: node server.js
end: CTRL+C
*/ 
const express = require('express'); // access to the express library by searching your node_modules for "express"
const app = express(); // creates an instance of the express constructor

// return some mock JSON data
const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

// listen for requests being made on localhost:8000
app.listen(8000,function(){ 
    console.log("server is listening")
})