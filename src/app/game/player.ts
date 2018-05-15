import { Actor, Engine, Input, Timer } from 'excalibur'
import { multiply } from 'ramda'

import { Controller } from './controller'
import { Projectile } from './projectile'

const controls = {
  Left: Input.Keys.Left,
  Right: Input.Keys.Right,
  Up: Input.Keys.Up,
  Down: Input.Keys.Down,
  Shoot: Input.Keys.Space,
}

const sign = value => (value === 0 ? 0 : value > 0 ? 1 : -1)
const isSmall = value => Math.abs(value) < 0.1

export class Player extends Actor {
  private direction = 0
  private canShoot = true
  private readonly acceleration = 400
  private readonly myFriction = 100

  public update(engine: Engine, ms: number) {
    const delta = ms / 1e3
    this.updateMovement(engine, delta)
    this.updateShooting(engine, delta)

    this.rotation = this.direction

    super.update(engine, ms)
  }

  private updateShooting(engine: Engine, delta: number) {
    if (!this.canShoot) {
      return
    }

    if (engine.input.keyboard.isHeld(controls.Shoot)) {
      // create a bullet and add to engine
      const bullet = new Projectile(this.pos, 1000, this.direction)
      engine.add(bullet)

      // delay next shot
      this.canShoot = false
      engine.add(
        new Timer(() => {
          this.canShoot = true
        }, 100),
      )
    }
  }
  private updateMovement(engine: Engine, delta: number) {
    const perSecond = multiply(delta)

    const controller = new Controller(engine.input)
    const step = controller.value

    if (step.magnitude()) {
      const traction = perSecond(50)
      if (step.x === 0) {
        if (!isSmall(this.vel.x)) console.log('x traction')
        this.vel.x -= sign(this.vel.x) * traction
      }
      if (step.y === 0) {
        if (!isSmall(this.vel.y)) console.log('y traction')
        this.vel.y -= sign(this.vel.y) * traction
      }
      this.vel.addEqual(step.normalize().scale(perSecond(this.acceleration)))
    }
    const currentSpeed = this.vel.magnitude()
    if (currentSpeed) {
      // store last direction (before stopping)
      this.direction = this.vel.toAngle()

      const remaining = Math.max(0, currentSpeed - perSecond(this.myFriction))
      const scale = remaining / currentSpeed
      this.vel.scaleEqual(scale)
    }
  }
}
