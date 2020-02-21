function limitToScreenY(y: number) {
    if (y < 0) { return 0 }
    if (y > 4) { return 4 }
    return y
}

let birdY = 2

function moveBird(offset: number) {
    birdY = limitToScreenY(birdY + offset)
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
