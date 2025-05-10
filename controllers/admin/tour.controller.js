module.exports.list = async (req, res) => {
    res.render("admin/pages/tour-list", {
        pageTitle: "Tour list page",
    }); // Ko can them view/ do co app.set view o tren roi
};

module.exports.create = async (req, res) => {
    res.render("admin/pages/tour-create", {
        pageTitle: "Tour create page",
    }); // Ko can them view/ do co app.set view o tren roi
};

module.exports.trash = async (req, res) => {
    res.render("admin/pages/tour-trash", {
        pageTitle: "Tour trash page",
    }); // Ko can them view/ do co app.set view o tren roi
};
