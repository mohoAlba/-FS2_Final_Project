
// JSON file to hold user's username and password
// they will be used in the main page to check wiether the user signed up or not
var ID = {
    "username": "",
    "password": ""
}

const express = require('express')

const app = express()






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