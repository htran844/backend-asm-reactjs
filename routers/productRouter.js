const express = require("express");
const controller = require("../controller/productController.js");
const router = express.Router();
const upload = require("../middlerwares/productMiddle");
router.get("/test", controller.test);
router.get("/", controller.getAll);
router.post("/", upload.array("images", 12), controller.createProduct);
router.get("/:id", controller.getOne);
router.put("/:id", upload.array("images", 12), controller.updateOne);
router.delete("/:id", controller.deleteOne);
module.exports = router;