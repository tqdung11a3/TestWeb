module.exports.home = (req, res) => {
    res.render("client/pages/home", {
        pageTitle: "Home page",
    }); // Ko can them view/ do co app.set view o tren roi
};
