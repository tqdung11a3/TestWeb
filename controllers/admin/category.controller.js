module.exports.list = async (req, res) => {
    res.render("admin/pages/category-list", {
        pageTitle: "Category list page",
    });
};

module.exports.create = async (req, res) => {
    res.render("admin/pages/category-create", {
        pageTitle: "Category create page",
    });
};
