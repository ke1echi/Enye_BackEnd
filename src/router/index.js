const router = require('express').Router();

// Import controllers
const { 
  ratesController
} = require('../controller/index');

router.get('/api/rates', ratesController);

module.exports = router;