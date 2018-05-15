import { Actor, Color, Vector } from 'excalibur'
export class Projectile extends Actor {
  constructor(
    pos: Vector,
    speed: number,
    direction: number,
    color = Color.Yellow,
  ) {
    super({
      pos,
      color,
      vel: new Vector(speed, 0).rotate(direction),
      width: 10,
      height: 10,
    })

    this.on('preupdate', ({ engine }) => {
      // const {left,right,top,bottom} = engine.getWorldBounds()
      if (!engine.getWorldBounds().contains(this.pos)) {
        this.kill()
      }
    })
  }
}
