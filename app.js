//to do list version 1

const express = require("express");
const bodyParser = require("body-parser");
const page = __dirname;
const date = require(page + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items = ['buy foods', 'cook foods', 'eat foods'];
let workItems = [];
app.get("/", (req, res) => {

    let day = {
        listTitle: date.getDate(),
        addItem: items
    }

    res.render("list", day);
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
});
app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work",
        addItem: workItems
    })
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});