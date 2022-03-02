const app = require("./app")

const port  = process.env.PORT ? process.env.PORT : 5555


app.listen(port, () => {
    console.log("Server is running!")
})