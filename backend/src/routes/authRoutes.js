import express from "express";
import { register, login, getMe } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticateToken, getMe);

router.get("/open", (req, res) => {
  res.status(200).json({ message: "auth open works" });
});

export default router;


