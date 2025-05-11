module.exports.login = async (req, res) => {
    res.render("admin/pages/login", {
        pageTitle: "Login page",
    }); // Ko can them view/ do co app.set view o tren roi
};

module.exports.register = async (req, res) => {
    res.render("admin/pages/register", {
        pageTitle: "Register page",
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
