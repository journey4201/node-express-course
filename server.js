/*
run server.js on terminal: node server.js
end: CTRL+C
specific access: http://localhost:8000/users/mark
*/ 
const express = require('express'); // access to the express library by searching your node_modules for "express"
const app = express(); // creates an instance of the express constructor
// In order to make POST requests, first we need to include the "body-parser" library from our node_modules (included with express).
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

// handle a POST request made to the 'login'
app.post('/login',function(req,res){
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username=req.body.username;
    const password=req.body.password;

    // come from the database
    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

// listen for requests being made on localhost:8000
app.listen(8000,function(){ 
    console.log("server is listening")
})