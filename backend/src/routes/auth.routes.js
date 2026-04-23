import express from "express";
import { login, register, getMe } from "../controllers/auth.controller.js";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../validators/auth.validator.js";
import { autheticateUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", validateRegisterUser, register);

router.post("/login", validateLoginUser, login);

router.get("/get-me",autheticateUser, getMe)

export default router;
