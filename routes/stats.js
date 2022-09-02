var express = require('express');
var router = express.Router();

router.get('/statistik-umur', function (req, res, next) {
    res.render('statistik-umur');
});

router.get('/statistik-pekerjaan', function (req, res, next) {
    res.render('statistik-pekerjaan');
});

router.get('/statistik-jeniskelamin', function (req, res, next) {
    res.render('statistik-jeniskelamin');
});

router.get('/statistik-pendidikan', function (req, res, next) {
    res.render('statistik-pendidikan');
});

router.get('/statistika-umurantest', function (req, res, next) {
    res.render('statistika-umurantest');
});

router.get('/statistik-jeniskelaminrev', function (req, res, next) {
    res.render('statistik-jeniskelaminrev');
});


router.get('/statistik-status', function (req, res, next) {
    res.render('statistik-status');
});


// router.get('/statistik-pekerjaan', function(req,res,next){
//   res.render('statistik-pekerjaan');
// });

module.exports = router;