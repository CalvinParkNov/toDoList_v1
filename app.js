//to do list version 1

const express = require("express");
const bodyParser = require("body-parser");
const page = __dirname;


const app = express();

app.get("/", (req, res)=>{
  //get day
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const today = new Date();
  
  if(today.getDay() === 6 || today.getDay() === 0){
    res.sendFile(page + "/index.html");
    // res.write("It is weekend!");
  }else {
    let day = weekday[today.getDay()];
    // res.write("<h1>Today is " + day + "</h1>");
    // res.write("<h3>Go back to work!</h3>");
    // res.send();
    res.sendFile(page + "/index.html");
  }


});

app.listen(3000, ()=>{
  console.log("Server is running on port 3000.");
});