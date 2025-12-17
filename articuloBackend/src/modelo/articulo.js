

const{Schema,model}=require('mongoose');

const articuloSchema=new Schema({

       nombre:{type:String, required:true},
       categoria:{type:String, required:true}, 
       precio:{type:Number, required:true},
       imagen:{type:String, required:true} 
    
},
{
    timestamps:true
});


module.exports=model('Articulo', articuloSchema);