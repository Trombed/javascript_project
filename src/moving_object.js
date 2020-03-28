import Bullet from "./bullets"
import { Util } from "./util"



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


    remove() {
        this.game.remove(this)
      
    }
}

export default MovingObject