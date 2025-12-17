require('./BD');
const app=require('./app');



app.listen(app.get('puerto'),()=>{
    console.log('CORRIENDO PUERTO',app.get('puerto'));
})