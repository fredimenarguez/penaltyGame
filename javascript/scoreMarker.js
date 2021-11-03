class Scoremarker {
    constructor(ctx, canvasSize, posX, posY, width, height, scoreBoard) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = posX
        this.posY = posY

        this.width = width
        this.height = height

        this.scoreText = 'Gol: '
        this.scoreBoard = scoreBoard

    }



    draw() {
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillText(`${this.scoreText}${this.scoreBoard}`, this.posX, this.posY);
        this.ctx.font = '25px Arial';



    }

}
