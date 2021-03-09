
const express= require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//const { dbConnection } = require('./database/config');
// CREAR EL SERVIDOR DE EXPRESS

//console.log(process.env)
const app = express();


// base de datos

dbConnection();
// Directorio Público 

//Cors
app.use(cors())
 
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
