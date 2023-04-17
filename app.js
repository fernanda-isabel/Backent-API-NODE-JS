//console.log("Bienvenidosss!!");
const express=require("express");
const mongo=require("mongoose");

const ruta = require("./routes/tipoEquipoRuta");
const ruta2 = require("./routes/estadoEquipoRuta");
const ruta3 = require("./routes/usuarioRuta");
const ruta4 = require("./routes/marcaRuta");
const ruta5 = require("./routes/inventarioRuta");


const app=express();

app.use(express.json());
app.use("/tipos", ruta);
app.use("/estados", ruta2);
app.use("/usuarios", ruta3);
app.use("/marcas", ruta4);
app.use("/inventario", ruta5);

mongo.connect("mongodb+srv://Fernanda:root@cluster0.cw58o9g.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>app.listen(3000,()=>console.log("Conexion exitosa en el puerto 3000"))
)
.catch((err)=> console.log(err))




