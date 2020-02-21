const screen = { minY: 0, maxY: 4 }
function clamp(min: number, value: number, max: number) {
    return Math.min(max, Math.max(min, value))
}
function randomY() {
    return Math.randomRange(screen.minY, screen.maxY)
}
function limitToScreenY(y: number) {
    return clamp(screen.minY, y, screen.maxY)
}

let birdY = randomY()

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
