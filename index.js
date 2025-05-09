const express = require("express");
const path = require("path");
require("dotenv").config();
const database = require("./config/database");

// DO ĐOẠN NÀY ĐƯỢC TÁCH RA FOLDER MODAL RỒI NÊN KO CẦN NỮA
// const Tour = require("./models/tour.model");

const adminRoutes = require("./routes/admin/index.route");
const clientRoutes = require("./routes/client/index.route");

const app = express();
const port = 3000;

// KẾT NỐI DATABASE
database.connect();

// THIẾT LẬP THƯ MỤC VIEWS VÀ VIEW ENGINE PUG
app.set("views", path.join(__dirname, "views")); // Thư mục chứa file Pug

app.set("view engine", "pug"); // Thiết lập pug làm view engine

// THIET LAP THU MUC CHUA FILE TINH
app.use(express.static(path.join(__dirname, "public")));

// THIẾT LẬP ĐƯỜNG DẪN
app.use("/admin", adminRoutes);
app.use("/", clientRoutes);

app.listen(port, () => {
    console.log(`Website đang chạy trên cổng ${port}`);
});
