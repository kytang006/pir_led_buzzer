basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P12, 10)
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P12, 0)
        basic.clearScreen()
    }
})
