const express = require("express");
const router = express.Router();
const PaymentController = require("../controllers/paymentController");

router.get("/", PaymentController.getAllPayments);
router.get("/:id", PaymentController.getPaymentById);
router.post("/", PaymentController.createPayment);
router.put("/:id", PaymentController.updatePayment);
router.delete("/:id", PaymentController.deletePayment);

module.exports = router;
