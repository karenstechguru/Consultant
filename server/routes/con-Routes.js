const express = require('express');
const router = express.Router();
const ConsultantAuth = require("../controllers/con-auth-controller")
const cors = require('cors');
router.use(cors());
router.post('/conLogin', ConsultantAuth.conLogin);

module.exports = router;