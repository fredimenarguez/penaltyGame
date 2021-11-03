class Turnmarker {
    constructor(ctx, canvasSize, posX, posY, width, height, turnCounter) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = posX
        this.posY = posY

        this.width = width
        this.height = height

        this.turnText = 'Turno: '

        this.turnCounter = turnCounter

    }



    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillText(`${this.turnText}${this.turnCounter}`, this.posX, this.posY);
        this.ctx.font = '25px Arial';



    }

}
