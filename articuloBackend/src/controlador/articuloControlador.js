
 const Articulo=require('../modelo/articulo');
const articuloControlador = {};




articuloControlador.listar = async (req, res) => {  
    const articulos = await Articulo.find();
    res.json(articulos);
};
 
 
articuloControlador.crear = async (req, res) => {  
    const nuevoArticulo = new Articulo(req.body);
    await nuevoArticulo.save();
    res.send('ARTICULO INSERTADO');
};


 


articuloControlador.buscar = async (req, res) => {  
     const articuloEncontrado = await Articulo.findOne({id:req.param});
     res.json(articuloEncontrado);
 
};

articuloControlador.editar = async(req, res) => {
     
    const articuloEditado=await Articulo.findByIdAndUpdate(req.params.id,req.body);
    res.json({
        mensaje:'EL ARTICULO FUE ACTUALIZADO',
        articuloEditado
    });
};

articuloControlador.eliminar = async(req, res) => {
    
   const articuloEliminado= await Articulo.findByIdAndDelete(req.params.id);
    res.json({
        mensaje:'EL ARTICULO FUE ELIMINADO',
        articuloEliminado
    });

};


module.exports = articuloControlador;