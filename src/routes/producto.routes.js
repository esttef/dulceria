const {Router}=require('express');
const productosController=require('../controllers/dulces.controller');
const routes=Router();
routes.get('/',productosController.obtenerDulces);

routes.get('/:ns',productosController.buscarDulces)

routes.delete('/:ns',productosController.eliminarDulce)

routes.post('/',prodcutosController.insertarDulce)

module.exports = router;