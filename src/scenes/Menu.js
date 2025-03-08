class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    preload() {

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

        this.add.text(game.config.width/2, game.config.height/2-30, 'ICHIGO: CHILD OF THE SEA', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'MOVE WITH A AND D. JUMP WITH W.', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2+30, 'GET TO HIGHER GROUND BEFORE A WAVE SWEEPS YOU AWAY!', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2+60, 'PRESS W TO PLAY', menuConfig).setOrigin(0.5)
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.upKey)) {      
          this.scene.start('playScene')    
        }
    }
}