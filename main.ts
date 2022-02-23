let rastojenje = 0
basic.forever(function () {
    rastojenje = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (rastojenje > 50) {
        basic.showNumber(rastojenje)
        basic.pause(1000)
    } else if (rastojenje > 25 && rastojenje < 50) {
        music.playTone(330, music.beat(BeatFraction.Breve))
        basic.pause(1000)
    } else {
        music.playTone(988, music.beat(BeatFraction.Breve))
        basic.pause(1000)
    }
})
