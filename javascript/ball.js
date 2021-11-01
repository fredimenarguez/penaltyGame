class Ball {
    constructor(ctx, posX, posY, width, height, speedX, speedY, imageName) {
        this.ctx = ctx
        // this.canvasSize = canvasSize

        this.posX = posX
        this.posY = posY

        // this.speedX = speedX
        // this.speedY = speedY

        this.width = width
        this.height = height

        this.imageInstance = undefined
        this.imageName = imageName

        // this.gravity = 0.4

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.posX, this.posY, this.width, this.height) //hay que rellenar con las speed

    }

    // move() {
    //     this.posX += this.speedX
    //     this.posY += this.speedY

    //     //gravedad de la pelota
    //     this.speedY += this.gravity
    // }

}