const { Interface } = require("readline");

class DevsRepositoriesInMemory {
     
     constructor() {
         this.devs = [
            {
                name:   "Rafa Ballerini" ,
                avatar: "https://github.com/rafaballerini.png" ,
                office: "Instrutora front-end" ,
                github: "https://github.com/rafaballerini" ,
                linkedin:"https://www.linkedin.com/in/rafaella-ballerini-45875016a" 
            },
            {
                name:   "Rafa Ballerini" ,
                avatar: "https://github.com/rafaballerini.png" ,
                office: "Instrutora front-end" ,
                github: "https://github.com/rafaballerini" ,
                linkedin:"https://www.linkedin.com/in/rafaella-ballerini-45875016a" 
            },
            {
                name:   "Rafa Ballerini" ,
                avatar: "https://github.com/rafaballerini.png" ,
                office: "Instrutora front-end" ,
                github: "https://github.com/rafaballerini" ,
                linkedin:"https://www.linkedin.com/in/rafaella-ballerini-45875016a" 
            },
            {
                name:   "Rafa Ballerini" ,
                avatar: "https://github.com/rafaballerini.png" ,
                office: "Instrutora front-end" ,
                github: "https://github.com/rafaballerini" ,
                linkedin:"https://www.linkedin.com/in/rafaella-ballerini-45875016a" 
            }
        ]
     }
    list() {
        const allDevs = this.devs.filter(a => a);
        return allDevs;
    }
    create(name,office,avatar,github,linkedin) {
        this.devs.push({
            name,
            avatar,
            office,
            github,
            linkedin

        })
    }
    findByGitHub(github){
        const dev = this.devs.find(d => d.github == github)
        return dev
    }
}


module.exports = new DevsRepositoriesInMemory()