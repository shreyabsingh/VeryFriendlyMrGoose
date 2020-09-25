let hits = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
	
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
	
})
forever(function () {
    if (input.rotation(Rotation.Pitch) > 8) {
        light.showRing(
        `red red green red red red red red red red`
        )
    }
    if (input.rotation(Rotation.Pitch) < -8) {
        light.showRing(
        `red red red red red red red green red red`
        )
    }
    if (input.rotation(Rotation.Roll) < 8) {
        light.showRing(
        `green red red red red red red red red green`
        )
    }
    if (input.rotation(Rotation.Roll) > -8) {
        light.showRing(
        `red red red red green green red red red red`
        )
    }
})
forever(function () {
    light.setAll(0xff0000)
    hits = 5
    if (hits) {
        light.setBrightness(255)
        light.showRing(
        `pink pink purple blue white green yellow orange red red`
        )
        light.showAnimation(light.rainbowAnimation, 500)
        music.powerUp.playUntilDone()
    } else {
        light.showRing(
        "red red red red red red red red red red"
        )
        light.showAnimation(light.runningLightsAnimation, 500)
        music.powerDown.playUntilDone()
    }
})
