import Player from "./player";
import Control from "./control";


class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.player = new Player(this.ctx, this)
        this.height = this.ctx.canvas.height;
        this.width = this.ctx.canvas.width;
        this.animate();
        
        this.control = new Control(this.player, canvas)
        this.bullets = [];
    }
    
    
    
    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.ctx.clearRect(0,0,this.width,this.height)
        this.ctx.fillStyle ="silver";
        this.ctx.fillRect(0,0, this.ctx.width,this.ctx.height);
        this.player.draw()
        if (this.bullets !== undefined) { 
            this.bullets.forEach( bullet=> (
                bullet.fire()
          

            ))
        }
   
    }

}

export default Game; 