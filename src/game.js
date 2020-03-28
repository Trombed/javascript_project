import Player from "./player";
import Control from "./control";
import Bullet from './bullets'
import Enemy from "./enemy";
import Level from "./level";
import EnemyProjectile from "./enemy_projectile";
import Boss from "./boss";

class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.height = this.ctx.canvas.height-100;
        this.width = this.ctx.canvas.width;
        this.bullets = [];
        this.projectiles = [];
        this.enemies = [];
        this.gameStarted = false;
        this.currentLevel = 0;
        this.paused = false
        this.player = new Player(this.ctx, this)
        this.level = new Level(this)
        this.control = new Control(this.player, canvas, this)
        this.splash();
        
      

     
    }

    splash() {
        this.ctx.clearRect(0,0,this.width,this.height)
        this.ctx.font = "12px Arial";
        this.ctx.fillStyle = "red";
        this.ctx.fillText("PRESS ENTER TO START",230, 280);
        // this.gameStart()
    }

    startGame() {
        if (!this.gameStarted) {
            this.gameStarted = true;
            this.gameStart()
        }
    }

    gameStart() {
   
        this.level.startNewLevel()
        this.animate();
    }

    addEnemy() {
        const enemy = new Enemy(this.ctx, this.player, this)
        this.enemies.push(enemy)
    }

    addBoss() {
        const boss = new Boss(this)
        this.enemies.push(boss)
    }
    
  
    
    animate() {
        requestAnimationFrame(this.animate.bind(this))
        if (!this.paused ) {
            this.ctx.clearRect(0,0,this.width,this.height)
            this.ctx.fillStyle ="silver";
            this.ctx.fillRect(0,0, this.ctx.width,this.ctx.height);
            this.player.draw()

         
            if (this.bullets !== undefined) { 
                this.bullets.forEach( bullet=> (
                    bullet.fire()  
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
                    if (enemy instanceof Enemy ) {
                        if (enemy.isCollidedWith(bullet)) { 
                            const collision = enemy.collidedWith(bullet)
                        }
                    } else if (enemy instanceof Boss) {
                        if (enemy.isBossCollidedWith(bullet)) { 
                            const collision = enemy.collidedWith(bullet)
                        }
                    }
                }
            }
            if (this.projectiles !== undefined) { 
                this.projectiles.forEach( projectile => (
                    projectile.fire()
                

                ))
            }

            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "red";
            this.ctx.clearRect(0,500,this.width,this.height+100)
            this.ctx.fillText(this.player.currentWeapon[0],30, 580);
            this.ctx.font = "20px Arial";
            this.ctx.fillText(`Stage: ${this.currentLevel}`,30, 550);
            this.ctx.fillText(`Health: ${this.player.health}`,430, 580);
            



        
        } if (this.paused) {
            this.ctx.font = "48px Arial";
            this.ctx.fillStyle = "red";
            this.ctx.fillText("PAUSED",400, 400);
        } if (this.enemies.length === 0) {
            this.level.startNewLevel();
        }
    }

    remove(object) {

        if (object instanceof Bullet) {
 
            this.bullets.splice(this.bullets.indexOf(object), 1);
        } if (object instanceof Enemy) {
            this.enemies.splice(this.enemies.indexOf(object), 1);
        } if (object instanceof EnemyProjectile) {
            this.projectiles.splice(this.projectiles.indexOf(object), 1);
        }if (object instanceof Boss) {
            this.enemies.splice(this.enemies.indexOf(object), 1);
        }
    }

   

}

export default Game; 