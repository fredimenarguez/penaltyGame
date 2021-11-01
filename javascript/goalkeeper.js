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
    
    randomItem(){
        this.throwArray[Math.floor(Math.random() * this.throwArray.length)]();
        console.log(this.speedX, this.speedY);
    }
    

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
        console.log(this.speedX);
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

        //  if (this.posY + this.height == 310) {
        //      this.speedY = 0
        //  }

        //gravedad de la pelota
        //this.speedY += this.gravity
    }



    throwRight = () => {
        console.log(this.speedX);
        this.speedX = 8
        console.log(this.speedX);
            
    }

    throwLeft = () => {
        console.log(this.speedX);
        this.speedX = -8
        console.log(this.speedX);
        
    }
    
    throwUp = () => {
        console.log(this.speedY);
        this.speedY = 0
        console.log(this.speedY);
        

    }


     // randomThrow(random){
    //     if(random === 0){
    //         console.log('popino1')
    //         this.speedX +=8
    //     }else if(random === 1){
    //         console.log('popino')
    //         this.speedX -=8
    //     }
    // }

}