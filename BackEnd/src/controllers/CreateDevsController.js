

class CreateDevsController {
    constructor(){}

    handle(request , response){

        const { name , office , avatar , github , linkedin} = request.body

        console.log(name,office,avatar,github,linkedin)

        const createDevsService = require("../services/CreateDevsService")
        
        createDevsService.execute(name,office,avatar,github,linkedin)

        return response.status(201).send()

    }

}


module.exports = new CreateDevsController()