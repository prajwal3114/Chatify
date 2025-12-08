import express from 'express';
import { signup } from '../controllers/user.controller.js';

const router = express.Router();

// only "/"
router.post("/", signup);

export default router;
