
const express= require('express');
require('dotenv').config();
// CREAR EL SERVIDOR DE EXPRESS

//console.log(process.env)
const app = express();

// Directorio Público 
 
app.use(express.static('public'));

// Lectura y parseo del body 

//app.use(express.json());
app.use(express.json());


//Rutas
// auth crear login renew TODO Crud Eventos

app.use('/api/auth', require('./routes/auth'));

//escuchar peticiones

app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)

})
