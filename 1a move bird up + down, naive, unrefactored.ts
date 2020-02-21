let birdY = 2

led.plot(0, birdY)

input.onButtonPressed(Button.A, function () {
    birdY = birdY - 1
    basic.clearScreen()
    led.plot(0, birdY)
})
input.onButtonPressed(Button.B, function () {
    birdY = birdY + 1
    basic.clearScreen()
    led.plot(0, birdY)
})
