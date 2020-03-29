import Bullet from "./bullets"
import { Util } from "./util"
import Player from "./player"


class MovingObject {
    constructor(game) {
        this.game = game
    }

    isCollidedWith(otherObject) {

        if (otherObject instanceof Bullet) {
            if (Util.dist(this, otherObject) ){
                return true 
            }
            return false 
        }
        return false
    }

    isBossCollidedWith(otherObject) {
        if (otherObject instanceof Bullet) {
            if (Util.distBoss(this, otherObject) ){
                return true 
            }
            return false 
        }
        return false
    }

    isCollidedWithPlayer(otherObject) {
        
        if (otherObject instanceof Player) {
            
            if (Util.distPlayer(this, otherObject) ){
                this.remove();
                return true 
            }
            return false 
        }
        return false
    }


    remove() {
        this.game.remove(this)   
    }
}

export default MovingObject