const juegos = require("../juegos.js")
const { request, response} = require("express")

const getJuegosName = (req = request, res = response)=>{
    let nombreJuego = req.params.name;
    
    var largoJuego = nombreJuego.length;
    let juegosName = juegos.filter(juego => {
       let juegoNombreCorto = juego.name.substring(0, largoJuego).toLowerCase();
        return juegoNombreCorto === nombreJuego.toLowerCase();
    });

    if (juegosName.length > 0){
        return res.json({
            ok:true,
            statusCode:200,
            juegosName
        })
    }else{
        return res.json({
            ok:false,
            statusCode:404,
            msg:"No hay juegos con ese nombre."
        })
    }

}
module.exports = {
    getJuegosName
}