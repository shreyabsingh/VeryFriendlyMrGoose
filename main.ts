forever(function () {
    if (input.rotation(Rotation.Pitch) > 8) {
        makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.rotation(Rotation.Pitch))
        light.showRing(
        `red red green red red red red red red red`
        )
    }
    if (input.rotation(Rotation.Pitch) < -8) {
        makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.rotation(Rotation.Pitch))
        light.showRing(
        `red red red red red red red green red red`
        )
    }
    if (input.rotation(Rotation.Roll) < 8) {
        makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, input.rotation(Rotation.Roll))
        light.showRing(
        `green red red red red red red red red green`
        )
    }
    if (input.rotation(Rotation.Roll) > -8) {
        makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, input.rotation(Rotation.Roll))
        light.showRing(
        `red red red red green green red red red red`
        )
    }
})
