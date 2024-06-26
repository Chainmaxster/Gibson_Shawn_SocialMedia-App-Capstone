import express from 'express';
import { login, register } from '../controllers/auth.js'; // Assuming you have a register controller
// import { validateLogin, validateRegister } from '../middleware/validators.js'; // Placeholder for validation middleware

const router = express.Router();

// Routes
router.post('/login', /* validateLogin, */ login);
router.post('/register', /* validateRegister, */ register); // Placeholder for registration route

export default router;
