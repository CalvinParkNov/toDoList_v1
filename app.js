//to do list version 1

const express = require("express");
const bodyParser = require("body-parser");
const page = __dirname;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

var items = ['buy foods', 'cook foods', 'eat foods'];

app.get("/", (req, res) => {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("en-US", options);

    let data = {
        todayDate: day,
        kindOfDay: 'Today',
        addItem: items

    };

    res.render("list", data);
});
app.post("/", (req, res) => {
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});