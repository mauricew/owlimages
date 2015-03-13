var express = require('express');
var router = express.Router();
var multer = require('multer');

router.use('/', multer({ dest: './uploads' }));

router.post('/', function(req, res, next) {
  var upload = req.files.upload;
  res.redirect('/' + upload.path);
});

module.exports = router;
