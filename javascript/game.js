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
            // this.clearScreen()
            this.drawAll()
            this.moveAll()
            this.createAll()
        }, 1000 / 1)
    },


    createAll() {
        this.createBall()
        // this.createGKeaper()
        this.createBackground()
    },

    createBackground() {
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, "background1.png")
    },
    createBall() {
        this.ball = new Ball(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, "ball1.png")
    },

    drawAll() {
        this.drawBall()
        // this.drawGKeaper()
        this.drawBackground()
    },
    drawBackground() {
        this.background.draw()
    },

    drawBall() {
        this.ball.draw()

    },

    // moveAll() {
    //     this.moveBall()
    //     // this.moveGKeaper()

    // },

    clearScreen() {
        this.ctx.cleanRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    setListeners() {
        document.onkeydown = (e) => {

        }
    },








}

