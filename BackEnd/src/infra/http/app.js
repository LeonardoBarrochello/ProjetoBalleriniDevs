const express = require("express")
const router = require("./routes")
const cors = require("cors")
const app = express();



app.use(cors())
app.use(express.json());
app.use(router);
app.use((err , request , response , next) => {
    return response.status(500).json({
        status  : "Error" ,
        message  : err.message
    })
    next()

})

module.exports = app

