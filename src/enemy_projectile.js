import MovingObject from "./moving_object";

class EnemyProjectile extends MovingObject{
    constructor(game, pos, width, height, speed, random) {
        super(game)
        this.ctx = game.ctx;
        this.player = game.player;
        this.pos = pos;
        this.enemyWidth = width,
        this.enemyHeight = height
        this.speed = speed
        this.width = 5;
        this.height = 5;
        this.gameHeight = game.height;
        this.gameWidth = game.width
        this.x = pos.x;
        this.y = pos.y;
        this.random = random

        var deltaX = this.player.pos.x - (this.pos.x + this.width/2) + (Math.random() * 10) ;
        var deltaY = this.player.pos.y - (this.pos.y + this.height/2) + (Math.random() * 10);
        var magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const velocityScale = this.speed / magnitude;
        this.velocityInstanceX = deltaX * velocityScale;
        this.velocityInstanceY = deltaY * velocityScale;

        this.randomVelocity = 10

    }

    fire() {
    
            this.x += this.velocityInstanceX
            this.y += this.velocityInstanceY
            if (this.x > this.gameWidth || this.x < 0) {
            
                this.remove(this)
                
            } else if (this.y > this.gameHeight || this.y < 0) {
                this.remove(this)
            }
            this.draw();

        

    } 



    draw() {
        this.ctx.strokeStyle = "green";
   
        this.ctx.beginPath();
        this.ctx.arc(this.x + (this.enemyWidth /  2), this.y + (this.enemyHeight /  2), 2, 0, 2 * Math.PI);
     
        this.ctx.fill();
    }
}

export default EnemyProjectile;