module.exports.list = async (req, res) => {
    res.render("admin/pages/tour-list", {
        pageTitle: "Tour list page",
    });
};

module.exports.create = async (req, res) => {
    res.render("admin/pages/tour-create", {
        pageTitle: "Tour create page",
    });
};

module.exports.trash = async (req, res) => {
    res.render("admin/pages/tour-trash", {
        pageTitle: "Tour trash page",
    });
};
