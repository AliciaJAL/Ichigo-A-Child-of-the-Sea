class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }

    create() {
        let menuConfig={
            fontFamily: 'Courier',
            fontsize: '50px',
            backgroundColor: '#ffffff',
            color: '#000000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2-30, 'Inspired By Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'ALICIA LANDA: Art, Programming, & Design', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2+30, 'PARKER LANUM: Sound, Programming, & Design', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2+60, 'All sounds from Pixabay', menuConfig).setOrigin(0.5)
		this.add.text(game.config.width/2, game.config.height/2+90, 'Press SPACE to go BACK', menuConfig).setOrigin(0.5)
        this.backKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.backKey)) {      
          this.scene.start('menuScene')    
        }
    }
}