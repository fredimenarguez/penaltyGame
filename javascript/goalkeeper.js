class Goalkeeper {
    constructor(ctx, canvasSize, posX, posY, imageName, width = 100, height = 200, speedX = 0, speedY = 0) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.posX = posX
        this.posY = posY

        this.speedX = 0
        this.speedY = 0

        this.width = width
        this.height = height

        this.frames = 2
        this.framesIndex = 0

        this.imageInstance = undefined
        this.imageName = imageName


        this.throwArray = [
            this.throwRight,

            this.throwLeft,

            this.throwUp

        ]


        //this.gravity = 0.4

        this.init()
    }

    randomItem(ballDirection, power) {
        const currentThrowArr = [...this.throwArray]

        if (power < 300) {
            if (ballDirection === "left") currentThrowArr.splice(1, 1)
            if (ballDirection === "left") currentThrowArr.splice(1, 1)
            if (ballDirection === "left") currentThrowArr.splice(1, 1)
        }




        return currentThrowArr[Math.floor(Math.random() * currentThrowArr.length)]();
    }

    throwRight = () => {
        this.speedX = 8
        return 'right'
    }

    throwLeft = () => {
        this.speedX = -8
        return 'left'
    }

    throwUp = () => {
        this.speedY = -1.25
        return 'up'
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            // this.framesIndex * this.imageInstance.width / this.frames,  //inicio de recorte x
            // 0,                                                          //inicio de recorte y
            // this.imageInstance.width / this.frames,                     //ancho de recorte
            // this.imageInstance.height, 
            this.posX,
            this.posY,
            this.width,
            this.height) //hay que rellenar con las speed


        //     if (framesCounter % 10 === 0) {
        //             this.animate()
        //           }
        //         }

        // animate() {
        //     if (this.framesIndex === 2) {
        //         this.framesIndex = 0
        //         }
        //     this.framesIndex++
    }




    move() {
        this.posX += this.speedX
        this.posY += this.speedY


        if (this.posX + this.width == 650 || this.posX + this.width == 250) {
            this.speedY = 0
            this.speedX = 0
        }

        //  if (this.posY + this.height == 310) {
        //      this.speedY = 0
        //  }

        //gravedad de la pelota
        //this.speedY += this.gravity
    }


}