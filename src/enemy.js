import Bullet from "./bullets";
import MovingObject from "./moving_object";


class Enemy extends MovingObject {
    constructor(ctx,player, game) {
        super(game)
        this.player = player;
        this.ctx = ctx;
        this.health = 2;
        this.pos = {
            x: 200,
            y: 200
        };
        this.width = 5;
        this.height = 5;
    }



    draw() {
    this.ctx.strokeStyle = "Brown";
    this.ctx.strokeRect( this.pos.x, this.pos.y, this.width,this.height)
    }

    collidedWith(otherObject) {
        if (otherObject instanceof Bullet) {
            this.remove();
            otherObject.remove();
        }
    }

}
export default Enemy;