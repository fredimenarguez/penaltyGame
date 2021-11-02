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
    scoreBoard: 0,
    bannerGol: undefined,
    bannerLoser: undefined,
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
        this.intervalId = setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.moveAll()
        }, 1000 / 45)
    },


    createAll() {
        this.createBall()
        this.createGKeeper()
        this.createBackground()
        this.createBannerGol()
        this.createBannerLoser()
        this.createScoreMarker()
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


    createBannerGol() {

        this.bannerGol = new Bannergol(this.ctx, this.canvasSize, 225, 100, "gol1.png", 450, 250)
    },

    createBannerLoser() {

        this.bannerLoser = new Bannerloser(this.ctx, this.canvasSize, 225, 100, "loser1.png", 450, 250)

    },

    createScoreMarker() {

        this.ScorerMarker = new Scoremarker(this.ctx, this.canvasSize, 10, 20, 75, 33, this.scoreBoard)

    },

    drawAll() {
        this.drawBackground()
        this.drawGKeeper()
        this.drawBall()
        this.drawScoreMarker()

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

    drawBannerGol() {
        this.bannergol.draw()

    },

    drawBannerLoser() {
        this.bannerLoser.draw()
    },

    drawScoreMarker() {

        this.ScorerMarker.draw()

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
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    setListeners() {
        document.onkeydown = e => {
            console.log("presiono tecla", e.key)

            e.key === "ArrowRight" ? this.checkCollision(this.ball.shootRight()) : null
            e.key === "ArrowLeft" ? this.checkCollision(this.ball.shootLeft()) : null
            e.key === "ArrowUp" ? this.checkCollision(this.ball.shootUp()) : null

        }

    },


    checkCollision(ballDirection) {
        if (ballDirection === this.goalKeeper.randomItem()) {
            console.log('PARADON');
            this.showBanners('parada')
        } else {
            this.showBanners('gol')
            console.log('GOL');
        }

    },

    showBanners(string) {

        setTimeout(() => {
            if (string === 'parada') {
                this.bannerLoser.draw()

            } else if (string === 'gol') {
                this.bannerGol.draw()
                this.addScore()
            }
            console.log(this.scoreBoard);
            clearInterval(this.intervalId)

        }, 500)

        setTimeout(() => {
            this.init()
        }, 2000)
    },

    addScore() {
        this.scoreBoard += 10
    },

}

