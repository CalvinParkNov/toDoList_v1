//to do list version 1

const express = require("express");
const bodyParser = require("body-parser");
const page = __dirname;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items = ['buy foods', 'cook foods', 'eat foods'];
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
let workItems = [];
app.get("/", (req, res) => {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let date = today.toLocaleDateString("en-US", options);
    let day = weekday[today.getDay()];

    let data = {
        todayDate: date,
        listTitle: day,
        addItem: items

    };

    res.render("list", data);
});
app.post("/", (req, res) => {
    let item = req.body.newItem;

   
    if (req.body.work === "Work") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }
})
app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work",
        addItem: workItems
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});