module.exports.list = async (req, res) => {
    res.render("admin/pages/setting-list", {
        pageTitle: "Setting list page",
    });
};

module.exports.accountAdminList = async (req, res) => {
    res.render("admin/pages/setting-account-admin-list", {
        pageTitle: "Setting account admin list page",
    });
};

module.exports.accountAdminCreate = async (req, res) => {
    res.render("admin/pages/setting-account-admin-create", {
        pageTitle: "Setting account admin create page",
    });
};

module.exports.roleList = async (req, res) => {
    res.render("admin/pages/setting-role-list", {
        pageTitle: "Setting role list page",
    });
};

module.exports.roleCreate = async (req, res) => {
    res.render("admin/pages/setting-role-create", {
        pageTitle: "Setting role create page",
    });
};

module.exports.websiteInfo = async (req, res) => {
    res.render("admin/pages/setting-website-info", {
        pageTitle: "Setting website info page",
    });
};
