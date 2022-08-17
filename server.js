const express = require("express");
const morgan = require("morgan");

const app = express();
const routerProductos = require("./src/routes/productos.routes.js");

// /*-------------------Middleware-------------------------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));


// /*-------------------Rutas-------------------------*/
app.use("/api/productos", routerProductos);

const server = app.listen(8080, ()=> {
    console.log("servidor escuchando http://localhost:8080/")
});

server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});
