var express = require('express');
var fs = require('fs');

var router = express.Router();

router.route('/one').get(function (req, res, next){
  // readFileSync로 읽어서 순차적으로 코드 실행되도록 처리
  var student = fs.readFileSync("./data/student.json");

  studentJson = JSON.parse(student);

  res.json(studentJson);
});


module.exports = router;
