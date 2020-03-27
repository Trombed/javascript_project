import Player from "./player";
import Control from "./control";
import Bullet from './bullets'
import Enemy from "./enemy";


class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.player = new Player(this.ctx, this)
        this.height = this.ctx.canvas.height;
        this.width = this.ctx.canvas.width;
       
        
        this.control = new Control(this.player, canvas)
        this.bullets = [];
        this.enemies = []
        this.gameStart();
    }


    gameStart() {
   
        this.animate();
        const enemy = new Enemy(this.ctx, this.player, this)
        this.enemies.push(enemy)
    }
    
    
    
    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.ctx.clearRect(0,0,this.width,this.height)
        this.ctx.fillStyle ="silver";
        this.ctx.fillRect(0,0, this.ctx.width,this.ctx.height);
        this.player.draw()
        if (this.bullets !== undefined) { 
            this.bullets.forEach( bullet=> (
                bullet.fire(),
          
                console.log(this.bullets, this.enemies)
            ))
        }
        if (this.enemies !== undefined) { 
            this.enemies.forEach( enemy => (
                enemy.draw()
             

            ))
        }
        for (let i = 0; i < this.enemies.length; i++) {
            for (let j = 0; j < this.bullets.length; j++) {
                const enemy = this.enemies[i];
                const bullet = this.bullets[j];

             
                if (enemy.isCollidedWith(bullet)) {
                    const collision = enemy.collidedWith(bullet)
                }
            }
        }
        
   
    }

    remove(object) {

        if (object instanceof Bullet) {
 
            this.bullets.splice(this.bullets.indexOf(object), 1);
            
     
        } else if (object instanceof Enemy) {
            this.enemies.splice(this.enemies.indexOf(object), 1);
        }
    }

}

export default Game; 