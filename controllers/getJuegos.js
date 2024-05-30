const juegos = require("../juegos.js")
const { request, response} = require("express")

const getJuegos = (req = request, res = response)=>{

    return res.json({
        ok:true,
        statusCode:200,
        juegos
    })
}

module.exports = {
    getJuegos
}