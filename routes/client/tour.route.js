const router = require("express").Router();
const tourController = require("../../controllers/client/tour.controller");

// router.get("/tours", tourController.list);
router.get("/", tourController.list); // DO BÊN FILE index.route.js đã có đường dẫn /tours rồi nên bên này ko cần thêm vào nx

router.get("/detail", tourController.detail);

module.exports = router;
