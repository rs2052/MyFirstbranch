const express = require('express');
const router = express.Router();
authController = require('../controllers/auth');

router.get('/', (req, res) => {
    res.render('index', {
        user: req.user
    });
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});



module.exports = router;