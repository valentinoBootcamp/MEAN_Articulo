const {Router}=require('express');
const ruta=Router();

 
const articuloControlador=require('../controlador/articuloControlador');

ruta.get('/listar',articuloControlador.listar);
ruta.post('/insertar',articuloControlador.crear);
ruta.get('/buscar/:id',articuloControlador.buscar);
ruta.put('/editar/:id',articuloControlador.editar);
ruta.delete('/eliminar/:id',articuloControlador.eliminar);

module.exports=ruta;