class Turnmarker {
    constructor(ctx, canvasSize, posX, posY, width, height, turnCounter) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = posX
        this.posY = posY

        this.width = width
        this.height = height

        this.turnCounter = turnCounter

    }



    draw() {
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(this.turnCounter, this.posX, this.posY);
        this.ctx.font = '50px Arial';



    }

}
