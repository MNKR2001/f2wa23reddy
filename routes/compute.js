var express = require('express');
var router = express.Router();
var x =Math.floor(Math.random() * 10);

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.x!= null && req.query.x!=undefined) {
    x= req.query.x
  }
    res.send(`Math.cbrt() applied to ${x} is ${Math.cbrt(x)}`);
    
});

module.exports = router;