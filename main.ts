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
