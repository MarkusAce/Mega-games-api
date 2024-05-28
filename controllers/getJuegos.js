const juegos = require("../juegos.js")
const { request, response} = require("express")

const getJuegos = (req = require, res = response)=>{

    return res.json({
        ok:true,
        statusCode:200,
        juegos
    })
}

module.exports = {
    getJuegos
}