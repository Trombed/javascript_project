export const Util = {
    dist(enemy, bullet) {
      
        const xDist = Math.abs((bullet.x ) - (enemy.pos.x))
        const yDist = Math.abs((bullet.y ) - (enemy.pos.y))
        if (  (xDist < 10 && yDist < 10)
        )
         {
            return true 
        
        } 
        return false 
    },

    distBoss(boss, bullet) {
        const xDist = Math.abs((bullet.x ) - (boss.pos.x))
        const yDist = Math.abs((bullet.y ) - (boss.pos.y))
        if (  (xDist < boss.width && yDist < boss.height)
        )
         {
            return true 
        
        } 
        return false 
    }
}
