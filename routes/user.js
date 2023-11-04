import express from 'express';
import { registerTheNumber } from '../controllers/userController.js';

const router = express.Router();


router.post("/login", registerTheNumber)

export default router;