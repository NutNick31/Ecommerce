import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// Router Object
const router = express.Router();

// const registerController = () => {};

// Register
router.post("/register", registerController);

// Login
router.post("/login", loginController);

// Forgot Password || POST
router.post("/forgot-password", forgotPasswordController)

// Test
router.get("/test", requireSignIn, isAdmin, testController);

// Protected User Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected Admin Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
