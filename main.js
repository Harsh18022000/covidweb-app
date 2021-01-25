const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('images'));
const firebase = require("./firebase/firebase_connect");
let alert = require('alert');


app.get("/",function(request,response){
   response.sendFile(__dirname + '/index.html');
});


app.listen(3000,function(){
            console.log("server has started")});


app.post("/",function(req,res){
        var firstname = req.firstname;
        var messageRef = firebase.database().ref('users/');
        var newmessageRef = messageRef.push();
        newmessageRef.set({
               firstname:req.body.firstname,
               lastname:req.body.lastname,
               email:req.body.email,
               messages:req.body.messages,
               });
               alert("Data Inserted successfully!!!");
               res.sendFile(__dirname + '/index.html');
});