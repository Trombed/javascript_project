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

        this.gameStarted = false;
        this.currentLevel = 0;
        this.paused = false
        this.player = new Player(this.ctx, this)
        this.level = new Level(this)
        this.control = new Control(this.player, canvas, this)
        this.splash();
        this.gameEnded = true;
    }

    splash() {

        
        
        this.ctx.fillStyle = "fuchsia";
        this.ctx.font = "30px Audiowide";
        this.ctx.fillText("NotSoTouHou",120, 180) 
        this.ctx.fillText("PRESS ENTER TO START",120, 280)   
    }



    startGame() {
        if (!this.gameStarted) {
            this.gameStarted = true;
            this.currentLevel = 0
            this.player.health = 5;
            this.bullets = [];
            this.projectiles = [];
            this.enemies = [];
            this.gameStart()
        }
    }

    gameStart() {
        this.ctx.clearRect(0,0,this.width,this.height)

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
        this.start = requestAnimationFrame(this.animate.bind(this))
        if (!this.paused) {
            this.ctx.clearRect(0,0,this.width,this.height)
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
                this.projectiles.forEach( projectile => {
                    projectile.fire()
                 
            

                })
            }

            for (let i = 0; i < this.projectiles.length; i++) {
                
                    const projectile = this.projectiles[i];
                    if (projectile.isCollidedWithPlayer(this.player)) {
                     
                      this.player.collidedWith()
                    }
                    
                }
            
            
            this.ctx.font = "30px Audiowide";
            this.ctx.fillStyle = "#ff124f";
            this.ctx.strokeStyle = "fuchsia"
            this.ctx.strokeWidth = "2"
            this.ctx.beginPath();
            this.ctx.lineWidth = "3"
            this.ctx.moveTo(0, 500);
            this.ctx.lineTo(600,500);
            this.ctx.stroke();
            this.ctx.clearRect(0,500,this.width,this.height+100)
            this.ctx.fillText(this.player.currentWeapon[0],30, 580);
            this.ctx.font = "20px Audiowide";
            this.ctx.fillText(`Stage: ${this.currentLevel}`,30, 550);
            this.ctx.fillText(`Health: ${this.player.health}`,430, 580);
            


    
        
        } if (this.paused) {
            this.ctx.font = "48px Audiowide";
            this.ctx.clearRect(0,0,this.width,this.height+100)
            this.ctx.fillStyle = "fuchsia";
            this.ctx.fillText("PAUSED",180, 300);
        } if (this.enemies.length === 0) {
            this.level.startNewLevel();
        } if (this.player.health <= 0) {
            this.gameOver()
            
        } 
    }

    gameOver() {
        cancelAnimationFrame(this.start)
        this.gameStarted = false;
        this.gameEnded = true;
        this.ctx.clearRect(0,0,this.width,this.height+100)
        this.ctx.font = "48px Audiowide";
        this.ctx.fillStyle = "fuchsia";
        this.ctx.fillText("GAME OVER",150, 250);
        this.ctx.font = "38px Audiowide";
        this.ctx.fillText("Press R to Restart",120, 350);
        

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