class Ball {
    constructor(ctx, canvasSize, posX, posY, imageName, width = 60, height = 60, speedX = 0, speedY = 10) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = posX
        this.posY = posY

        this.speedX = speedX
        this.speedY = speedY

        this.width = width
        this.height = height

        this.imageInstance = undefined
        this.imageName = imageName
        this.initBall = true

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.posX, this.posY, this.width, this.height)

    }

    move() {
        this.posX += this.speedX
        this.posY += this.speedY

        if (this.posY + this.height == 500 && this.initBall) {
            this.speedY = 0
            this.initBall = false
            game.canShoot = true
        }

        if (this.posX + this.width == 650 || this.posX + this.width == 250) {
            this.speedY = 0
            this.speedX = 0
        }

        if (!this.initBall && this.posY + this.height == 250) {
            this.speedY = 0
        }
    }

    shootRight() {
        this.speedY = -10
        this.speedX = 8
        return 'right'
    }

    shootLeft() {
        this.speedY = -10
        this.speedX = -8
        return 'left'
    }

    shootUp() {
        this.speedY = -10
        this.speedX = 0
        return 'up'
    }
}


