const devsRepositoryInMemory = require("../repositories/in-memory/DevsRepositoriesInMemory")


class LisDevsService {
   
    constructor(){
    }
    execute(){
        const devs = devsRepositoryInMemory.list();
        return devs;
    }
}


module.exports = new LisDevsService()