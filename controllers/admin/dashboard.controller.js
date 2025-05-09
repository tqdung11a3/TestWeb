module.exports.dashboard = async (req, res) => {
    res.render("admin/pages/dashboard", {
        pageTitle: "Dashboard page",
    }); // Ko can them view/ do co app.set view o tren roi
};
