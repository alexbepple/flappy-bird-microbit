const screen = { minY: 0, maxY: 4, minX: 0, maxX: 4 }
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
const wallSpawnX = screen.maxX
let wallX = wallSpawnX

function moveBird(offset: number) {
    birdY = limitToScreenY(birdY + offset)
}
function renderBird() {
    led.plot(0, birdY)
}
function renderWall() {
    for (let y = screen.minY; y <= screen.maxY; y++) {
        led.plot(wallX, y)
    }
}
function render() {
    basic.clearScreen()
    renderBird()
    renderWall()
}

render()

input.onButtonPressed(Button.A, function () {
    moveBird(-1)
    render()
})
input.onButtonPressed(Button.B, function () {
    moveBird(+1)
    render()
})
basic.forever(function () {
    basic.pause(800)
    wallX = wallX - 1
    if (wallX < 0) { wallX = wallSpawnX}
    render()
})
