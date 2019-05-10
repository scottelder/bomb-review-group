const express = require("express"); 
const app = express(); 
const port = 9000; 
const bodyParser= require ("body-parser"); 
const db = require('./db/db')

app.use(bodyParser.json());
app.use(express.static("./dist"))


app.post("/", (req,res) => {
db.insertMessage(req.body);
 console.log("The request body: ", req.body);
 res.send(req.body.text)
});

app.get('/msg', (req, res) => {
  db.getAllMessages((err, messages) => {
    if (err) {
      console.log('error getting messages', err)
    } else {
      res.send(messages);
    }
  })
});

app.listen(port,()=>{
  console.log('the server is listening')
});