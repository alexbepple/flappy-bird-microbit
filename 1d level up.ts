let birdY = 2

function moveBird(offset: number) {
    birdY = birdY + offset
    if (birdY < 0) { birdY = 0 }
    if (birdY > 4) { birdY = 4 }
}
function renderBird() {
    basic.clearScreen()
    led.plot(0, birdY)
}

renderBird()

input.onButtonPressed(Button.A, function () {
    moveBird(-1)
    renderBird()
})
input.onButtonPressed(Button.B, function () {
    moveBird(+1)
    renderBird()
})
