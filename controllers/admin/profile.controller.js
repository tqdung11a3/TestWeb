module.exports.edit = async (req, res) => {
    res.render("admin/pages/profile-edit", {
        pageTitle: "Profile edit page",
    });
};

module.exports.changePassword = async (req, res) => {
    res.render("admin/pages/profile-change-password", {
        pageTitle: "Profile change password page",
    });
};
