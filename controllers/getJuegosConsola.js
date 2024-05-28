const juegos = require("../juegos.js")
const { request, response} = require("express")

const getJuegosConsola = (req = require, res = response)=>{
    let consola = req.params.consola;

    let juegosConsola = juegos.filter( juego => juego.consola === consola);

    if (juegosConsola.length > 0){
        return res.json({
            ok:true,
            statusCode:200,
            juegosConsola
        })
    }else{
        return res.json({
            ok:false,
            statusCode:404,
            msg:"No hay juegos para esa consola"
        })
    }
    
}

module.exports = {
    getJuegosConsola
}