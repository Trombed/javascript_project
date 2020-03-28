import Bullet from "./bullets";
import MovingObject from "./moving_object";
import EnemyProjectile from "./enemy_projectile";


class Enemy extends MovingObject {
    constructor(ctx,player, game) {
        super(game)
        this.player = player;
        this.ctx = ctx;
        this.health = 3;
        this.pos = {
            x: this.startingPos(),
            y: this.startingPos()
        };
        this.width = 5;
        this.height = 5;
        this.gameHeight = game.height;
        this.gameWidth = game.width;
        this.lastFire = new Date();
        this.lastMove = new Date();
        this.moveToward = {
            x: 0,
            y: 0
        }
    } 

    startingPos() {
        return Math.random() * this.game.height
    }

    draw() {
    this.ctx.strokeStyle = "Brown";
    this.ctx.strokeRect( this.pos.x, this.pos.y, this.width,this.height)
    this.fire()
    }

    collidedWith(otherObject) {
        if (otherObject instanceof Bullet) {
            otherObject.remove();
            this.health -= 1;
            if (this.health <= 0)  this.remove();
        }
    }

    move() {
       const date = new Date();
       const timer = Math.floor(Math.rand() * 1000);
       this.moveToward.x = Math.floor(Math.rand() * this.gameWidth);
       this.moveToward.y = Math.floor(Math.rand() * this.gameHeight);
    }   

    fire() {
        const date = new Date();
        if (date - this.lastFire > 1000) {
            this.game.projectiles.push(new EnemyProjectile(this.game, this.ctx, this.player, this.pos))
            this.lastFire = date;
      
        }
    }

}
export default Enemy;