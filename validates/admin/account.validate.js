const Joi = require("joi");

module.exports.registerPost = (req, res, next) => {
    const schema = Joi.object({
        fullName: Joi.string().required().min(5).max(50).messages({
            "string.empty": "Vui long nhap ho ten",
            "string.min": "Ho ten phai co it nhat 5 ky tu",
            "string.max": "Ho ten ko dc vuot qua 50 ky tu",
        }),

        email: Joi.string().required().email().messages({
            "string.empty": "Vui long nhap email",
            "string.email": "Email ko dung dinh dang",
        }),

        password: Joi.string()
            .required()
            .min(8)
            .custom((value, helpers) => {
                if (!/[A-Z]/.test(value)) {
                    return helpers.error("password.uppercase");
                }
                if (!/[a-z]/.test(value)) {
                    return helpers.error("password.lowercase"); // Ít nhất một chữ cái thường
                }
                if (!/\d/.test(value)) {
                    return helpers.error("password.number"); // Ít nhất một chữ số
                }
                if (!/[!@\$!\*\?&]/.test(value)) {
                    return helpers.error("password.special"); // Ít nhất một ký tự đặc biệt
                }
                return value; // Nếu tất cả điều kiện đều đúng
            })
            .messages({
                "string.empty": "Vui long nhap mat khau",
                "string.min": "Mat khau phai co it nhat 8 ky tu",
                "password.uppercase":
                    "Mat khau phai chua it nhat 1 chu cai in hoa",
                "password.lowercase":
                    "Mật khẩu phải chứa ít nhất một chữ cái thường!",
                "password.number": "Mật khẩu phải chứa ít nhất một chữ số!",
                "password.special":
                    "Mật khẩu phải chứa ít nhất một ký tự đặc biệt!",
            }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        const errorMessage = error.details[0].message;

        res.json({
            code: "error",
            message: errorMessage,
        });
        return;
    }

    next();
};

module.exports.loginPost = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required().email().messages({
            "string.empty": "Vui long nhap email",
            "string.email": "Email ko dung dinh dang",
        }),

        password: Joi.string().required().messages({
            "string.empty": "Vui long nhap mat khau",
        }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        const errorMessage = error.details[0].message;

        res.json({
            code: "error",
            message: errorMessage,
        });
        return;
    }

    next();
};
