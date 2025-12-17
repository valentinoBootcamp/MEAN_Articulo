const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/articuloApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((db) => { console.log('CONEXION EXITOSA') })
    .catch((error) => { console.log('NO SE PUDO CONECTAR') });


