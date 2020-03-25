import { firebrick } from "color-name";

class Bullet {
    constructor(pos, ctx, cursor) {
        this.x = pos.x;
        this.y = pos.y
    
        this.size = 1;
        this.ctx = ctx;
        this.curX = cursor.x 
        this.curY = cursor.y
        this.dx = 
        this.width = 14;
        this.height = 14;




        var deltaX = this.curX - (this.x + this.width/2);
        var deltaY = this.curY - (this.y + this.height/2);
      
        var magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const velocityScale = 100 / magnitude;
        this.velocityInstanceX = deltaX * velocityScale;
        this.velocityInstanceY = deltaY * velocityScale;
    }

    fire() {
        this.x += this.velocityInstanceX
        this.y += this.velocityInstanceY
        console.log(this.x)
        console.log(this.y)
        this.draw();

    }

    draw() {
        this.ctx.strokeStyle = "Black";
        this.ctx.strokeRect( this.x, this.y, this.width, this.height)
       
       
    }

}


const BULLET_SPEED = 15;

export default Bullet 