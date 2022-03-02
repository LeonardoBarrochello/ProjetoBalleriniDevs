
const listDevsService = require("../services/ListDevsService");

module.exports = {

    handle(request,response){
         const devs = listDevsService.execute();

         return response.json(devs)
    }


}