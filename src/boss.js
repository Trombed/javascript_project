import Bullet from "./bullets";
import MovingObject from "./moving_object";
import EnemyProjectile from "./enemy_projectile";


class Boss extends MovingObject {
    constructor(game) {
        super(game)
        this.player = game.player;
        this.ctx = game.ctx;
        this.health = 10 * (this.game.currentLevel / 2);
        this.pos = {
            x: this.startingPos(),
            y: this.startingPos()
        };
        this.width = 50;
        this.height = 50;
        this.color = "#E6FFFF "
        this.gameHeight = game.height;
        this.gameWidth = game.width;
        this.lastFire = new Date();
        this.lastMove = new Date();
        this.lastRandomFire = new Date();
        this.speed = 2
        this.moveToward = {
            x: 0,
            y: 0
        }
    } 

    startingPos() {
        return Math.random() * this.game.height;
    }

    draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect( this.pos.x, this.pos.y, this.width,this.height)
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
       const timer = Math.floor(Math.rand() * 500);
       this.moveToward.x = Math.floor(Math.rand() * this.gameWidth);
       this.moveToward.y = Math.floor(Math.rand() * this.gameHeight);
    }   

    fire() {
        const date = new Date();
        if (date - this.lastFire > 100) {
            this.game.projectiles.push(new EnemyProjectile(this.game, this.pos, this.width, this.height, this.speed, true))
            this.lastFire = date;
      
        }
    }



}
export default Boss;