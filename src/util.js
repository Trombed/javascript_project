export const Util = {
    dist(enemy, bullet) {
        const xDist = Math.abs((bullet.x) - (enemy.pos.x))
        const yDist = Math.abs((bullet.y) - (enemy.pos.y))
        if (  (xDist < 10 && yDist < 10)
        )
         {
            return true 
        
        } 
        return false 
    }
}
