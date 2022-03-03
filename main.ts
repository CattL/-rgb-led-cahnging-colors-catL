led.enable(false)
pins.analogWritePin(AnalogPin.P2, 1023)
pins.analogWritePin(AnalogPin.P1, 1023)
pins.analogWritePin(AnalogPin.P0, 1023)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P2, 1023)
        for (let index = 0; index < 1; index++) {
            for (let val = 0; val <= 513; val++) {
                pins.analogWritePin(AnalogPin.P0, val)
                pins.analogWritePin(AnalogPin.P1, 1023 - val)
                pins.analogWritePin(AnalogPin.P2, 512 - val)
                basic.pause(1000)
            }
            for (let val = 0; val <= 513; val++) {
                pins.analogWritePin(AnalogPin.P0, 512 - val)
                pins.analogWritePin(AnalogPin.P1, 1023 - val)
                pins.analogWritePin(AnalogPin.P2, val)
                basic.pause(1000)
            }
        }
        pins.analogWritePin(AnalogPin.P2, 1023)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P0, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 1023)
    }
})
