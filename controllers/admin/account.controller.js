module.exports.login = async (req, res) => {
    res.render("admin/pages/login", {
        pageTitle: "Login page",
    }); // Ko can them view/ do co app.set view o tren roi
};
