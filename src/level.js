import Enemy from "./enemy";

class Level {
    constructor(game) {
        this.game = game
        
       
    }

    startNewLevel() {
        this.game.currentLevel += 1;

        if ( (this.game.currentLevel % 3) === 0) {
            this.normalLevel()
    
        } else  {
            this.bossLevel()
        }

    }

    normalLevel() {
        for(let i = 0; i < this.game.currentLevel; i++) {
           
            this.game.addEnemy();
            
        }
    }

    bossLevel() {
        this.game.addBoss();
    }
}

export default Level