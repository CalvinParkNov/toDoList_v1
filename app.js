//to do list version 1

const express = require("express");
const bodyParser = require("body-parser");
const page = __dirname;
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    //get day
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    const today = new Date();
    let day = weekday[today.getDay()];
    res.render("main/main", {kindOfDay: day});

});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});