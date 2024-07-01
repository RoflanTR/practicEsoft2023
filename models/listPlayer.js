class Player {
   
    static list = [];
    
    static async listPlayerSocket(id,name,flag,info) {
        switch(info){
            case 1: /*добавление */
            let player1 = {
                "idx": id,
                "name": name,
                "flag": flag,
              };
              
             this.list.push(player1);
                break;
        }
    }
    static async view(){
        console.log(this.list)
    }
}

module.exports = Player