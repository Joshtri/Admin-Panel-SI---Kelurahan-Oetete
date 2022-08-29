var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/main-admin', function(req, res, next) {
  res.render('main-admin');
});

// GET data-keluarga
router.get('/data-keluarga', function(req, res, next) {
  res.render('data-keluarga');
});

// GET data-penduduk
router.get('/data-penduduk', function(req, res, next) {
  res.render('data-penduduk');
});

// GET data-kelahiran
router.get('/data-kelahiran', function(req, res, next) {
  res.render('data-kelahiran');
});
// GET data-kematian
router.get('/data-kematian', function(req, res, next) {
  res.render('data-kematian');
});
// GET data-pekerjaan
router.get('/data-pekerjaan', function(req, res, next) {
  res.render('data-pekerjaan');
});
// GET data-pindah
router.get('/data-pindah', function(req, res, next) {
  res.render('data-pindah');
});
// GET data-masuk
router.get('/data-masuk', function(req, res, next) {
  res.render('data-masuk');
});
// GET data-penduduk
router.get('/data-penduduk', function(req, res, next) {
  res.render('data-penduduk');
});

// GET data-kbli
router.get('/data-kbli', function(req, res, next) {
  res.render('data-kbli');
});

// GET data-kbli
router.get('/data-umkm', function(req, res, next) {
  res.render('data-umkm');
});

// GET data-kbli
// router.get('/sidebar', function(req, res, next) {
//   res.render('sidebar');
// });


// GET tambah penduduk.
router.get('/tambah-data-penduduk', function(req, res, next) {
  res.render('tambah-data-penduduk');
});

// GET tambah kematian.
router.get('/tambah-data-kematian', function(req, res, next) {
  res.render('tambah-data-kematian');
});
router.get('/tambah-data-pindah', function(req, res, next) {
  res.render('tambah-data-pindah');
});

router.get('/tambah-data-keluarga', function(req, res, next) {
  res.render('tambah-data-keluarga');
});

router.get('/tambah-data-kelahiran', function(req, res, next) {
  res.render('tambah-data-kelahiran');
});
router.get('/tambah-data-masuk', function(req, res, next) {
  res.render('tambah-data-masuk');
});





// GET login view
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/statistik-umur', function(req,res,next){
  res.render('statistik-umur');
});

router.get('/statistik-pekerjaan', function(req,res,next){
  res.render('statistik-pekerjaan');
});

router.get('/statistik-pekerjaan', function(req,res,next){
  res.render('statistik-pekerjaan');
});

module.exports = router;
