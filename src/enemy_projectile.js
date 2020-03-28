import MovingObject from "./moving_object";

class EnemyProjectile extends MovingObject{
    constructor(game, ctx, player, pos) {
        super(game)
        this.ctx = ctx;
        this.player = player
        this.pos = pos
        this.width = 5;
        this.height = 5;
        this.gameHeight = game.height;
        this.gameWidth = game.width
        this.x = pos.x;
        this.y = pos.y

        var deltaX = this.player.pos.x - (this.pos.x + this.width/2) + (Math.random() * 100) ;
        var deltaY = this.player.pos.y - (this.pos.y + this.height/2) + (Math.random() * 100);
        var magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const velocityScale = 1 / magnitude;
        this.velocityInstanceX = deltaX * velocityScale;
        this.velocityInstanceY = deltaY * velocityScale;

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
        this.ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}

export default EnemyProjectile;