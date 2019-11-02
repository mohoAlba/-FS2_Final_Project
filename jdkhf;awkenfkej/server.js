
// JSON file to hold user's username and password
// they will be used in the main page to check wiether the user signed up or not
var ID = {
    "username": "",
    "password": ""
}

const express = require('express')
var path = require('path')
const app = express()
console.log(words);

app.use(express.static(__dirname, '/FS2_Final_Project'));

app.get('/' , function(req, res) { 
res.sendFile(__dirname + "/index.html");
console.log("The main page has been clicked ");
console.log(Date());

});

app.get('/index2.html' , function(req, res) { 
res.sendFile(__dirname + "/index2.html");
console.log("The main page has been clicked ");
console.log(Date());

});
app.get('/index.html' , function(req, res) { 
res.sendFile(__dirname + "/");
console.log(Date());
    
});
app.get('/index.html' , function(req, res) { 
    res.sendFile(__dirname + "/");
    
    console.log(Date());
        
    });


// you can a username and a passwords from the above bar
//
app.get('/add/:word/:score', addWord);

function addWord(req, res) {
    var data = req.params;
    var word = data.word;
    var score = data.score;

    ID[word] = score;
}

app.get('/ID', sendAll);
function sendAll(req, res) {
    res.send(ID);
}

app.listen(3000, function(){ console.log("some");});