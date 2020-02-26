let i: number = 0;
let state: boolean = true

basic.forever(function () {

    let ball2 = game.createSprite(0, 0)
    let ball3 = game.createSprite(4, 4)

    while (state) {

        ball2.move(1)
        ball2.ifOnEdgeBounce()
        let z = Math.randomRange(0, 90)
        ball2.turn(Direction.Right, z)

        ball3.move(1)
        ball3.ifOnEdgeBounce()
        ball3.turn(Direction.Right, z)
        basic.pause(100)

        if (ball2.isTouching(ball3)) {

            basic.pause(500)
            basic.clearScreen()
            basic.showString("BOOM")
            ball2.set(LedSpriteProperty.X, 0)
            ball2.set(LedSpriteProperty.Y, 0)
            ball3.set(LedSpriteProperty.X, 4)
            ball3.set(LedSpriteProperty.Y, 4)
            i++
            if (i == 1) {
                pins.analogWritePin(AnalogPin.P8, 1023)
            }
            else if (i == 2) {
                pins.analogWritePin(AnalogPin.P12, 1023)
            }
            else if (i == 3) {
                pins.analogWritePin(AnalogPin.P16, 1023)
            }

        }

    }

    ball2.delete()
    ball3.delete()

})
