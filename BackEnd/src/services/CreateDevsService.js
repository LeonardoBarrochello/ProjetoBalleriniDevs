
class CreateDevsService {
    constructor(){}

    execute(name,office,avatar,github,linkedin){
         const devsRepositoriesInMemory = require("../repositories/in-memory/DevsRepositoriesInMemory")

        //  const dev = devsRepositoriesInMemory.findByGithub(github)

        //  if(dev){
        //       throw new Error("user already exists")
        //  }

         devsRepositoriesInMemory.create(name,office,avatar,github,linkedin)

    }
}

module.exports = new CreateDevsService()


