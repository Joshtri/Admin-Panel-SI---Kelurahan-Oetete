const Sequelize = require('sequelize');
const db = require('../config/database/db');

var keluarga = db.define('keluarga',{
    no_kk: Sequelize.CHAR,
    alamat: Sequelize.STRING,
    kode_pindah:Sequelize.CHAR, 
    RT:Sequelize.STRING,
    RW:Sequelize.STRING,
    kode_pos:Sequelize.STRING,
    kel_n_desa:Sequelize.STRING,
    kecamatan: Sequelize.STRING,
    kota_n_kab:Sequelize.STRING,
    provinsi: Sequelize.STRING

},{
    frezeeTableName: true,
    timestamps : false
});

keluarga.removeAttribute('id');
module.exports = keluarga