import Bullet from "../dist/bullets";

class Player {
    constructor(ctx, game) {
        this.game = game;
        this.ctx = ctx
        this.speed = 0.0
        this.health = 0
        this.pos = {
            x: 100,
            y: 100
        }
        //player position
        this.cursorPos = {
            x: 0,
            y: 0
        }
 
        this.speed = 0;
        this.angle = "Up"
        this.height = this.ctx.canvas.height;
        this.width = this.ctx.canvas.width;
        this.currentWeapon = ["Assault Rifle","Pistol"]

    }


    moveLeft() {
        if (this.pos.x > 0) 
        this.pos.x -= 10;
    }

    moveRight() {
        if (this.pos.x < this.width)
        this.pos.x += 10;
    }

    moveUp() {
        if (this.pos.y > 0)
        this.pos.y -= 10;
    }

    moveDown() {
        if (this.pos.y < this.height)
        this.pos.y += 10;
    }

    shootBullet() {
  

        this.game.bullets.push(new Bullet(this.pos, this.ctx, this.cursorPos))
       
       
    }

    changeWeapon() {
        [this.currentWeapon[0], this.currentWeapon[1]] =
        [this.currentWeapon[1], this.currentWeapon[0]]
        console.log(this.cursorPos)
    }


    draw() {
        
        this.ctx.strokeStyle = "#FF0000";
        this.ctx.strokeRect( this.pos.x, this.pos.y, 20, 20)
        ;
        this.ctx.font = "12px Arial";
        this.ctx.fillStyle = "red";
        this.ctx.fillText(this.currentWeapon[0],330, 380);

    }

 


}

export default Player;