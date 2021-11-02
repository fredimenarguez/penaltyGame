class Scoremarker {
    constructor(ctx, canvasSize, posX, posY, width, height, scoreBoard,) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = posX
        this.posY = posY

        this.width = width
        this.height = height

        this.scoreBoard = scoreBoard

        //this.imageInstance = undefined
        //this.imageName = imageName

        //this.init()
    }

    // init() {
    //     this.imageInstance = new Image()
    //     this.imageInstance.src = `img/${this.imageName}`
    // }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.ctx.fillText(this.scoreBoard, this.posX, this.posY,);


    }

}
