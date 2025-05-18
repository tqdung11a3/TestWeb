const AccountAdmin = require("../../models/account-admin.model");
const bcrypt = require("bcryptjs");

module.exports.login = async (req, res) => {
    res.render("admin/pages/login", {
        pageTitle: "Login page",
    }); // Ko can them view/ do co app.set view o tren roi
};

module.exports.loginPost = async (req, res) => {
    const { email, password } = req.body;

    // Ktra xem email co ton tai hay ko
    const existAccount = await AccountAdmin.findOne({
        email: email,
    });

    if (!existAccount) {
        res.json({
            code: "error",
            message: "Email ko ton tai trong he thong",
        });
        return;
    }

    // Ktra mat khau co dung hay ko
    const isPasswordValid = await bcrypt.compare(
        password,
        existAccount.password
    );

    if (!isPasswordValid) {
        res.json({
            code: "error",
            message: "Mat khau ko dung",
        });
        return;
    }

    // ktra tai khoan da dc kich hoat hay chua
    if (existAccount.status != "active") {
        res.json({
            code: "error",
            message: "Tai khoan chua dc kich hoat",
        });
        return;
    }

    res.json({
        code: "success",
        message: "Dang nhap tai khoan thanh cong",
    });
};

module.exports.register = async (req, res) => {
    res.render("admin/pages/register", {
        pageTitle: "Register page",
    }); // Ko can them view/ do co app.set view o tren roi
};

module.exports.registerPost = async (req, res) => {
    const { fullName, email, password } = req.body;

    // email 1: email dinh nghia trg schema trong model, email 2 la email gui len
    const existAccount = await AccountAdmin.findOne({
        email: email,
    });

    if (existAccount) {
        res.json({
            code: "error",
            message: "Email da ton tai trong he thong",
        });
        return;
    }

    // Ma hoa mat khau voi bcrypt
    const salt = await bcrypt.genSalt(10); // Tao chuoi ngau nhien co 10 ky tu
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Chay vao controller");

    // Neu chua co email trg he thong, cho phep tao tai khoan
    const newAccount = new AccountAdmin({
        fullName: fullName,
        email: email,
        password: hashedPassword,
        status: "initial",
    });

    await newAccount.save();

    res.json({
        code: "success",
        message: "Dang ky tai khoan thanh cong",
    });
};

module.exports.registerInitial = async (req, res) => {
    res.render("admin/pages/register-initial", {
        pageTitle: "Tai khoan da dc khoi tao",
    }); // Ko can them view/ do co app.set view o tren roi
};

module.exports.forgotPassword = async (req, res) => {
    res.render("admin/pages/forgot-password", {
        pageTitle: "Forgot password page",
    });
};

module.exports.otpPassword = async (req, res) => {
    res.render("admin/pages/otp-password", {
        pageTitle: "Otp password page",
    });
};

module.exports.resetPassword = async (req, res) => {
    res.render("admin/pages/reset-password", {
        pageTitle: "Reset password page",
    });
};
