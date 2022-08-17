const express = require("express");
const routerProductos = express.Router();
const Productos = require("../productos.js");

const productos = new Productos();

routerProductos.get( "/", (req, res, next) => {
    res.status(200).json(productos.getAll());
    next();
});

routerProductos.post( "/", (req, res, next) => {
    res.status(201).json(productos.postProd(req.body));
    next();
});

routerProductos.get( "/:id", (req, res, next) => {
    let result = productos.getProd(req.params.id);
    if(result == '"Producto no encontrado"'){
        res.status(400).json({ error: 'Producto no encontrado' });
    }else{
        res.status(200).json(productos.getProd(req.params.id));
    }
    
    next();
});

routerProductos.put( "/:id", (req, res, next) => {
    let result = productos.getProd(req.params.id);
    if(result == '"Producto no encontrado"'){
        res.status(400).json({ error: 'Producto no encontrado' });
    }else{
        res.status(200).json(productos.getProd(req.params.id));
    }
    next();
})

routerProductos.delete( "/:id", (req, res, next) => {
    res.status(204).send(productos.deleteProd(req.params.id));
    next();
})

module.exports = routerProductos;