module.exports.list = async (req, res) => {
    res.render("admin/pages/category-list", {
        pageTitle: "Category list page",
    }); // Ko can them view/ do co app.set view o tren roi
};

module.exports.create = async (req, res) => {
    res.render("admin/pages/category-create", {
        pageTitle: "Category create page",
    }); // Ko can them view/ do co app.set view o tren roi
};
