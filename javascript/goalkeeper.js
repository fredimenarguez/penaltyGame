class Goalkeeper {
    constructor(ctx, canvasSize, posX, posY, imageName, width = 100, height = 200, speedX = 0, speedY = 0) {
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

        //this.gravity = 0.4

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.posX, this.posY, this.width, this.height) //hay que rellenar con las speed

    }

    move() {
        this.posX += this.speedX
        this.posY += this.speedY
    

         if (this.posX + this.width == 650 || this.posX + this.width == 250){
             this.speedY = 0  
             this.speedX = 0
         }

         if (this.posY + this.height == 250) {
             this.speedY = 0
         }

        //gravedad de la pelota
        //this.speedY += this.gravity
    }

    throwRight() {


        this.speedY = -10
        this.speedX = 8
            
    }

    throwLeft() {
        this.speedY = -10
        this.speedX = -8

    }

    throwUp() {
        this.speedY = -10
        this.speedX = 0

    }

}