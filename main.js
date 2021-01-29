const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const avail = require("./linkedlist.js");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('images'));
const firebase = require("./firebase/firebase_connect");
let alert = require('alert');
var count=0;
var date = 26;
var countRef = firebase.database().ref('count/');
var newcountRef = countRef.push();
newcountRef.set({
       count:0,
});
var dateRef = firebase.database().ref('date/');
var newdateRef = dateRef.push();
newdateRef.set({
       date:26,
});


app.get("/",function(request,response){
   response.sendFile(__dirname + '/index.html');
});


app.listen(3000,function(){
            console.log("server has started")});


app.post("/",function(req,res){
        
        var name = req.body.name;
        var occp = req.body.occp;
        var diab = req.body.diab;
        var resp = req.body.resp;
        var half = avail.sc(diab,resp);
        var full = avail.score(occp);
        var b = half*full;
        if(count==3){
              newcountRef.update({
                     count:0,
              });
              newdateRef.update({
                     date:date+1,
              });
        }
        /*database = firebase.database();
        var ref = database.ref('users');
        ref.on('value',gotdata,errdata);*/
        var messageRef = firebase.database().ref('users/');
        var newmessageRef = messageRef.push();
        newmessageRef.set({
               name:req.body.name,
               occp:req.body.occp,
               diab:req.body.diab,
               resp:req.body.resp,
               score:b,
               date:date,
               });
       newcountRef.update({
                     count:count+1,
              });
        const result = avail.calculator(name,occp,resp,diab);
        res.send("Your risk score is "+result);
               alert("Data Inserted successfully!!!");
});

function gotdata(data){
       //console.log(data.val());
       var users = data.val();
       var keys = Object.keys('users');
       for (var i =0; i < keys.length; i++){
              var k = keys[i];
              var intials = users[k].name;
              var score = users[k].score;
              var li = createElement('li',initials+':'+score);
              li.parent('scorelist');
       }
}
function errdata(err){
       console.log('Error!');
       console.log(err);

}
