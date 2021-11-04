class Direction {
    constructor(ctx, canvasSize, posX, posY, imageName, width, height, speedX, speedY) {
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
        //centerX: 360
        //leftX:150
        //right:570X
        // this.speedX = 10
        // console.log('mueve');

        // if (this.posX > 150 && this.posX < 570) {
        //     this.speedY = 0
        // }
    }
}
