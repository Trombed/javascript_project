class Control {
    constructor(player, canvas) {
        this.player = player;
        this.keys = {}
        const e  = window.event
        document.addEventListener("keydown", event => {
            event.preventDefault();
            this.keys[event.code] = true;
          
        if (this.keys["KeyA"]) {
            this.player.moveLeft();

        }  if (this.keys["KeyD"]) {
            this.player.moveRight();
        } if (this.keys["KeyW"]) {
            this.player.moveUp();
        }  if (this.keys["KeyS"]) {
            this.player.moveDown();
        
        } if (this.keys["ShiftLeft"]) {
            this.player.changeWeapon();
        } if (this.keys["KeyN"]) {


        }

        } 
        )
    
      
      document.addEventListener("keyup", event =>{  
     
          this.keys[event.code] = false;
      })

      document.addEventListener("mousedown", event => (
          event.preventDefault(),
          this.player.shootBullet()
      ))

      canvas.addEventListener("mousemove", event => (
          this.player.cursorPos.x = event.layerX,
          this.player.cursorPos.y = event.layerY

      ))
    }
}

export default Control;


//game will be used to pause canvas
