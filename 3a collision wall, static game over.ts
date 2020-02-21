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
let wallX: number
let holeY: number
let gameOver = false

function spawnWall() {
    wallX = screen.maxX
    holeY = randomY()
}
function moveBird(offset: number) {
    birdY = limitToScreenY(birdY + offset)
}
function moveWall() {
    wallX = wallX - 1
    if (wallX < 0) { spawnWall() }
}
function detectGameOver() {
    const collided = wallX === 0 && birdY !== holeY
    if (collided) { gameOver = true }
}

function renderBird() {
    led.plot(0, birdY)
}
function renderWall() {
    for (let y = screen.minY; y <= screen.maxY; y++) {
        led.plot(wallX, y)
    }
    led.unplot(wallX, holeY)
}
function render() {
    if (gameOver) {
        basic.showIcon(IconNames.Skull)
        return
    }
    basic.clearScreen()
    renderWall()
    renderBird()
}

spawnWall()
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
    moveWall()
    detectGameOver()
    render()
})
