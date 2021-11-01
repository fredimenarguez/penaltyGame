const game = {
    title: 'ChutaApuertA',
    author: 'Alfredo & Carlos',
    license: undefined,
    version: '1.0.0',
    description: 'Juego de penaltis',
    canvasDOM: undefined,
    ctx: undefined,
    canvasSize: { width: undefined, height: undefined },
    framesCounter: 0,
    frames: 60,
    intervalId: undefined,
    background: undefined,
    ball: undefined,
    goalKeeper: undefined,
    scoreBoard: undefined,
    obstacles: [],
    keys: undefined,


    init() {
        this.setContext()
        this.setDimensions()
        this.setListeners()
        this.createAll()
        this.start()

    },

    setContext() {
        this.canvasDOM = document.querySelector("#myCanvas")
        this.ctx = this.canvasDOM.getContext("2d")
    },

    setDimensions() {
        //TAMAÑO DONDE SE EJECUTARÁ EL JUEGO EN LA VENTANA. AHORA MISMO TODA LA VENTANA
        this.canvasSize.width = 800
        this.canvasSize.height = 600

        //EL ATRIBUTO POR DEFECTO DE WIDTH Y HEIGHT
        this.canvasDOM.setAttribute('width', this.canvasSize.width)
        this.canvasDOM.setAttribute('height', this.canvasSize.height)

    },
    start() {
        console.log('Start está funcionando')
        setInterval(() => {
            //this.clearScreen()
            this.drawAll()
            this.moveAll()
            //this.createAll()
        }, 1000 / 45)
    },


    createAll() {
        this.createBall()
        this.createGKeeper()
        this.createBackground()
    },

    createBackground() {
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, "background1.png")
    },
    createBall() {
        this.ball = new Ball(this.ctx, this.canvasSize, 400, 0, "ball1.png")
    },

    createGKeeper() {
        
        this.goalKeeper = new Goalkeeper(this.ctx, this.canvasSize, 350, 150, "goalkeeper.png")
    },

    drawAll() {
        this.drawBackground()
        this.drawGKeeper()
        this.drawBall()
        
    },
    drawBackground() {
        this.background.draw()
    },

    drawBall() {
        this.ball.draw()

    },

    drawGKeeper() {
        this.goalKeeper.draw()
        
    },


     moveAll() {
        this.moveBall()
        this.moveGKeeper()

     },

     moveGKeeper() {
        this.goalKeeper.move()
     },

    moveBall() {
        this.ball.move()
    },

    clearScreen() {
        this.ctx.cleanRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    setListeners() {
        document.onkeydown = e => {
            console.log("presiono tecla", e.key)

            e.key === "ArrowRight" ? this.ball.shootRight() : null
            e.key === "ArrowLeft" ? this.ball.shootLeft() : null
            e.key === "ArrowUp" ? this.ball.shootUp() : null

            e.key === "ArrowRight" ? this.goalKeeper.throwRight() : null
            e.key === "ArrowLeft" ? this.goalKeeper.throwLeft() : null
            e.key === "ArrowUp" ? this.goalKeeper.throwUp() : null

            

        }

    },








}

