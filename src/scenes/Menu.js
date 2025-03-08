class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }


    create() {
		
		// Add wave to the background & adjust to screen
		this.waveBackground = this.add.sprite(0, 0, "waveBackground").setOrigin(0.5, 0.5)
		this.waveBackground.setScrollFactor(0);
	
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
	
		this.staticGroup = this.physics.add.staticGroup()	
		
		this.sand = new Sand(this, window.innerWidth / 2, window.innerHeight - (window.innerHeight / 12), this.staticGroup)
			
		/*	this.physics.add.collider(this.staticGroup, this.objects, (ground, obj) => {
				if (obj.body.blocked.down) {
					obj.setVelocityY(0); // Stop downward movement only when touching the ground
				}
			
			})
		*/
		
		this.title = this.add.sprite(0, 0, "title").setOrigin(0.5, 0.5)
		this.title.setDisplaySize(window.innerWidth*(2089/1067)/4, window.innerHeight*(2089/1067)/4)
		this.title.setPosition(window.innerWidth / 2, window.innerHeight / 4)
		
		this.controls = this.add.sprite(0, 0, "controls").setOrigin(0.5, 0.5)
		this.controls.setDisplaySize((window.innerWidth*(870/1030))/2.5, (window.innerHeight*(870/1030))/2) // window*apsectRatio to sprites from appearing squished
		this.controls.setPosition(window.innerWidth / 2, (window.innerHeight / 5) *3.6)

		this.warningSign = this.add.sprite(0, 0, "warningSigns").setOrigin(0.5, 0.5)
		this.warningSign.setDisplaySize((window.innerWidth*(546/650))/4, (window.innerHeight*(546/650))/2)
		this.warningSign.setPosition(window.innerWidth/6, (window.innerHeight / 4)*3)

		this.mechSign = this.add.sprite(0, 0, "mechSign").setOrigin(0.5, 0.5)
		this.mechSign.setDisplaySize((window.innerWidth*(546/650))/2.8, (window.innerHeight*(546/650))/1.8)
		this.mechSign.setPosition((window.innerWidth / 6)*5, (window.innerHeight /4)*3)


		this.music = this.sound.add('waveBackgroundSFX', { 
			loop: true, 
			detune: 0, // Ensures no pitch distortions
			rate: 1,   // Default playback speed
			volume: 0.1 //1.0 is WAY too loud holy
		});
	
		this.music.play()

        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
		this.creditsKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.upKey)) {      
          this.scene.start('playScene')    
        }
		if (Phaser.Input.Keyboard.JustDown(this.creditsKey)) {      
			this.scene.start('creditsScene')    
		  }
    }
}