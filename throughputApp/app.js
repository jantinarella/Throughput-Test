var express = require('express')
var sys = require('sys')
var exec = require('child_process').exec;
var cors = require('cors');
var app = express()
var child;

app.use(cors())

app.get('/', function (req, res) {
    
    var commandString = "iperf3 -c " + req.query.serverIp + " -J --json";
    if (req.query.reverseFlag === "true") {
        commandString += " -R";
    }

    child = exec(commandString, function (error, results, stderr) {
      res.send(results)
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });  
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})