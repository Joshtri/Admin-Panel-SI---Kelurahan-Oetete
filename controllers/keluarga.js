const model = require('../config/model/index');
const controller = {};

controller.getAll = async function(req,res){
    try{
        await model.keluarga.findAll()
        .then((result) =>{
            if(result.length > 0){
                res.status(200).json({
                    message: 'Get The Method Mahasiswa',
                    data: result
                });
            }
            else{
                res.status(200).json({
                    message: 'Tidak ada Data',
                    data:[]
                });
            }
        })
    }catch(error){
        res.status(404).json({
            message: error

        });
    }
}

module.exports = controller;