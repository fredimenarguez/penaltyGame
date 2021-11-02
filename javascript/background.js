class Background {
    constructor(ctx, posX, posY, width, height, imageName) {
        this.ctx = ctx

        this.posX = posX
        this.posY = posY

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


}