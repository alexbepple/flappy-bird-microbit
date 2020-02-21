let birdY = 2

function renderBird () {
    basic.clearScreen()
    led.plot(0, birdY)    
}

renderBird()

input.onButtonPressed(Button.A, function () {
    birdY = birdY - 1
    renderBird()
})
input.onButtonPressed(Button.B, function () {
    birdY = birdY + 1
    renderBird()
})
