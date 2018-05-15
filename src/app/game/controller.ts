import { Input, Vector } from 'excalibur'

interface KeyMap {
  left: Input.Keys
  right: Input.Keys
  up: Input.Keys
  down: Input.Keys
}
const defaultKeyMap: KeyMap = {
  left: Input.Keys.Left,
  right: Input.Keys.Right,
  up: Input.Keys.Up,
  down: Input.Keys.Down,
}

export class Controller {
  constructor(
    private input: Input.IEngineInput,
    public readonly keyMap: KeyMap = defaultKeyMap,
  ) {}

  public get value(): Vector {
    return new Vector(this.x, this.y)
  }

  public get x(): number {
    return (
      -1 * Number(this.check(this.keyMap.left)) +
      1 * Number(this.check(this.keyMap.right))
    )
  }

  public get y(): number {
    return (
      -1 * Number(this.check(this.keyMap.up)) +
      1 * Number(this.check(this.keyMap.down))
    )
  }

  private check(key: Input.Keys): boolean {
    return this.input.keyboard.isHeld(key)
  }
}
