let birdY = 2

function renderBird() {
    basic.clearScreen()
    led.plot(0, birdY)
}

renderBird()

input.onButtonPressed(Button.A, function () {
    birdY = birdY - 1
    if (birdY < 0) { birdY = 0 }
    renderBird()
})
input.onButtonPressed(Button.B, function () {
    birdY = birdY + 1
    if (birdY > 4) { birdY = 4 }
    renderBird()
})
