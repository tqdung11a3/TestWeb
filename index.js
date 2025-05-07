const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE);

const Tour = require("./models/tour.model");
const app = express();
const port = 3000;

// THIẾT LẬP THƯ MỤC VIEWS VÀ VIEW ENGINE PUG
app.set("views", path.join(__dirname, "views")); // Thư mục chứa file Pug

app.set("view engine", "pug"); // Thiết lập pug làm view engine

// THIET LAP THU MUC CHUA FILE TINH
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("client/pages/home", {
        pageTitle: "Home page",
    }); // Ko can them view/ do co app.set view o tren roi
});

app.get("/tours", async (req, res) => {
    const tourList = await Tour.find({});
    console.log(tourList);
    res.render("client/pages/tour-list", {
        pageTitle: "Tour List",
        tourList: tourList,
    });
});

app.listen(port, () => {
    console.log(`Website đang chạy trên cổng ${port}`);
});
