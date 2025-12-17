const { urlencoded } = require('express');
const express=require('express');
const morgan=require('morgan');
const cors=require('cors');


const app=express();
app.use(cors());
//app.use(cors({origin:'http://localhost:4200'}));
app.use(morgan('dev')); 


app.use(express.json());
app.use(express.urlencoded({extends:false}));

app.use('/articulo',require('./rutas/articuloRuta')); 

app.set('puerto', process.env.PORT || 4000);

module.exports=app;
