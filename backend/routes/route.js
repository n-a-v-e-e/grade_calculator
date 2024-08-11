// routes/auth.js
const express = require('express');
const router = express.Router();
const { login,checkRollno,addStudentMark } = require('../controllers/auth');

// Define the POST route for /app/login
router.post('/login', login);

router.post('/rollNo', checkRollno);

router.post('/addDetails', addStudentMark);

module.exports = router;
