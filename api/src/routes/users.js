var express = require('express');
var router = express.Router();
var userApi = require("./userApi")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/api/getdata', userApi.getdata);
router.get('/api/getadd', userApi.getadd);
router.get('/api/getdel', userApi.getdel);

module.exports = router;