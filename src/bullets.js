import MovingObject from "./moving_object";

class Bullet extends MovingObject {
    constructor(pos, ctx, cursor, game) {
        super(game)
        this.ctx = ctx;
        this.x = pos.x;
        this.y = pos.y
        //position for bullet to spawn;
        this.xBound = game.width;
        this.yBound = game.height;
        //boundary to check out of bounds
        this.curX = cursor.x 
        this.curY = cursor.y
        //mouse pointer location
        this.width = 5;
        this.height = 5;
        //bullet height and width;
        var deltaX = this.curX - (this.x + this.width/2);
        var deltaY = this.curY - (this.y + this.height/2);
        var magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const velocityScale = 15 / magnitude;
        this.velocityInstanceX = deltaX * velocityScale;
        this.velocityInstanceY = deltaY * velocityScale;
    }

    fire() {
        this.x += this.velocityInstanceX
        this.y += this.velocityInstanceY
        if (this.x >= this.xBound || this.x <= 0) {
            this.remove(this)
            this.drawNothing()
            
            
        } if (this.y >= this.yBound || this.y <= 0) {
            this.remove(this)
            this.drawNothing();
            
        } else {

            this.draw();
        }
        
    }

    draw() {
        this.ctx.strokeStyle = "Black";
        this.ctx.strokeRect( this.x, this.y, this.width, this.height)  
    }

    drawNothing() {
        return null;
    }

}


const BULLET_SPEED = 15;

export default Bullet 