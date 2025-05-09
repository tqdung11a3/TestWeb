module.exports.cart = (req, res) => {
    res.render("client/pages/cart", {
        pageTitle: "Cart page",
    }); // Ko can them view/ do co app.set view o tren roi
};
