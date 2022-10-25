input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.playMelody("E - E - E - E - ", 960)
    music.playMelody("E - E - E - E - ", 960)
    music.playMelody("E - E - E - E - ", 960)
    music.playMelody("E - E - E - E - ", 960)
    music.playMelody("E - E - E - E - ", 960)
    music.playMelody("E - F - E - D - ", 960)
    music.playMelody("E - F - E - D - ", 960)
    music.playMelody("C5 - - - - - - - ", 960)
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playMelody("C5 - C5 - C5 - C5 - ", 960)
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playMelody("B - B - B - B - ", 960)
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Double))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Breve))
    music.playMelody("E E - - - - - - ", 960)
    music.rest(music.beat(BeatFraction.Double))
})
basic.forever(function () {
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . .
        # # # . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . .
        # # # . .
        # # # . .
        `)
})
