class Play extends Phaser.Scene {

    constructor() {
        super('playScene')
		
    }


    create() {
		// Add wave to the background & adjust to screen
		this.waveBackground = this.add.sprite(0, 0, "waveBackground").setOrigin(0.5, 0.5)

		this.anims.create({
			key: 'waveBg',
			frameRate: 3,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('waveBackground', {
				start: 0,
				end: 9
			})

		})

		this.waveBackground.setDisplaySize(window.innerWidth, window.innerHeight)
		this.waveBackground.setPosition(window.innerWidth / 2, window.innerHeight / 3)
		this.waveBackground.play('waveBg')

		// Add a yellow rectangle at the bottom of the screen (will make sand texture later)
        const graphics = this.add.graphics()
        graphics.fillStyle(0xF8E7B8, 1)
		graphics.fillRect(0, window.innerHeight - (window.innerHeight / 5), window.innerWidth, window.innerHeight / 5)
		
		this.crate = new Crate(this, window.innerWidth / 10, window.innerHeight / 1.25).setOrigin(0.5, 0.5).setScale(0.25)

		// Add Player & set scale
		this.player = new Player(this, window.innerWidth / 10, window.innerHeight / 1.25)
		this.player.setOrigin(0.5, 0.5)
		this.player.setScale(0.25) // should change later so it adjusts to the screen
		

		// Input keys
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        // this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }

	

	

    update() {
		this.player.update()
		   
		
		
	}		
}