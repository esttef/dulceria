const dulcesController = {};
const dulces = require("../models/productos.model");


dulcesController.obtenerDulces = async (req,res)=>{
    const dulces = await dulce.find()
    res.json(dulces)
}

dulcesController.insertarDulces = async (req,res)=>{
    const productoInsertado = new dulce(req.body)
    productoInsertado.save()
    res.json('{"status":"producto insertado"}')
}

dulcesController.eliminarDulce = async (req,res)=>{
    await dulce.findOneAndDelete({noSerie:req.params.ns})
    res.json('{"status":"Eliminado"}')
}


module.exports = laptopController
 