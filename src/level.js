import Enemy from "./enemy";

class Level {
    constructor(game, level) {
        this.game = game
        
       
    }

    startNewLevel() {
        this.game.currentLevel += 1;
        this.game.bullets = []
        this.game.projectiles = []
        if ( (this.game.currentLevel % 3) !== 0) {
            this.normalLevel()
    
        } else  {
            this.bossLevel()
        }

    }

    normalLevel() {
        for(let i = 0; i < 5; i++) {
     
            this.game.addEnemy();
            
        }
    }

    bossLevel() {
        this.game.addBoss();
    
      
    }
}

export default Level