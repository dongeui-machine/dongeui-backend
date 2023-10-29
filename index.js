const express = require('express');
const { dummyData } = require('./dummyData');
var cors = require('cors')
const app = express();
const port = 4000;

app.use(cors());

app.get('/', function (req, res) {
  res.send('This is Dongeui Machine API!');
});

app.get('/products', function (req, res) {
  res.send(dummyData);
});

app.get('/products/:id', function (req, res) {
  const { id } = req.params;

  res.send({
    data : dummyData.data.filter(e => e.id===Number(id))[0]
  })
});

app.listen(port, ()=>{
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