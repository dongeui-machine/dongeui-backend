const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(4000, ()=>{
    let figlet = require("figlet");

    figlet("DONGEUI", function (err, data) {
        if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
        }
        console.log(data);
    });
});

