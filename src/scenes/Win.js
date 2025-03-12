class Win extends Phaser.Scene {
    constructor() {
        super('winScene');
    }

    create() {
		this.waveBackground = this.add.sprite(0, 0, "waveBackground").setOrigin(0.5, 0.5)

		this.anims.create({
			key: 'waveBg',
			frameRate: 3,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('waveBackground', {
				start: 0,
				end: 9		})
	
		})
	
		this.waveBackground.setDisplaySize(window.innerWidth, window.innerHeight)
		this.waveBackground.setPosition(window.innerWidth / 2, window.innerHeight / 2)
		this.waveBackground.play('waveBg')

		this.door1 = this.add.sprite(0, 0, "door").setOrigin(0.5, 0.5)
		this.door1.setDisplaySize(window.innerWidth/2.5, window.innerHeight)
		this.door1.setPosition(window.innerWidth, window.innerHeight/2)
		

		this.door2 = this.add.sprite(0, 0, "door2").setOrigin(0.5, 0.5)
		this.door2.setDisplaySize(window.innerWidth/2.5, window.innerHeight)
		this.door2.setPosition(0, window.innerHeight/2)


		this.floor = this.add.sprite(0, 0, "floor")
		this.floor.setDisplaySize(window.innerWidth, window.innerHeight / 6)
		this.floor.setPosition(0, window.innerHeight - (window.innerHeight / 6))
		this.floor.setOrigin(0, 0)

		this.futon = this.add.sprite(0, 0, "futon").setOrigin(0.5, 0.5)
		this.futon.setScale((window.innerHeight/251)/3)
		this.futon.setPosition(window.innerWidth / 4,  window.innerHeight - (window.innerHeight / 8))



/*
		this.text = this.add.sprite(0, 0, "gameOver").setOrigin(0.5, 0.5)
	    this.text.setScale((window.innerHeight/271)/5)
		this.text.setPosition(window.innerWidth / 2, window.innerHeight / 4)
*/
		
		
        this.backKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }

    update(time, dt) {
        if (Phaser.Input.Keyboard.JustDown(this.backKey)) {      
          this.scene.start('menuScene')    
        }
    }
}