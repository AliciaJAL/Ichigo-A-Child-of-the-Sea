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
				end: 9			})

		})

		this.waveBackground.setDisplaySize(window.innerWidth, window.innerHeight)
		this.waveBackground.setPosition(window.innerWidth / 2, window.innerHeight / 2)
		this.waveBackground.play('waveBg')

		// Add a yellow rectangle at the bottom of the screen (will make sand texture later)
        // const graphics = this.add.graphics()
        // graphics.fillStyle(0xF8E7B8, 1)
		// graphics.fillRect(0, window.innerHeight - (window.innerHeight / 5), window.innerWidth*2, window.innerHeight / 5)

		//and sand 
		const sand = this.physics.add.staticImage(window.innerWidth / 2, window.innerHeight - (window.innerHeight / 10), 'sand').setOrigin(0.5, 0.5)
		.setDisplaySize(window.innerWidth * 2, window.innerHeight / 5)
		.refreshBody()
	
		this.crate = new Crate(this, window.innerWidth / 5, window.innerHeight - (window.innerHeight / 5)).setOrigin(1, 1).setScale(0.25)
		this.crate2 = new Crate(this, window.innerWidth / 2, window.innerHeight - (window.innerHeight / 5)).setOrigin(1, 1).setScale(0.25)


		// Add Player & set scale
		this.player = new Player(this, window.innerWidth / 10, window.innerHeight - (window.innerHeight / 5))
		this.player.setOrigin(1,1)
		this.player.setScale(0.25) // should change later so it adjusts to the screen

		//POTENTIALLY HELPFUL CODE FOR MOVING PLATFORMS
		
		// this.physics.add.collider(this.player, this.crate, () => {
        //     if (this.player.body.touched.down) {
		// 		 this.player.setVelocityX(this.crate.body.velocity.x);
        //     }
        // })

		// this.physics.add.collider(this.player, this.crate2, () => {
        //     if (this.player.body.touched.down) {
		// 		 this.player.setVelocityX(this.crate2.body.velocity.x);
        //     }
        // })

		// Enable collision between the player and the sand platform
		this.physics.add.collider(this.player, sand)
		this.physics.add.collider(this.crate, sand)
		this.physics.add.collider(this.crate2, sand)
		this.physics.add.collider(this.crate2, this.crate)
		this.physics.add.collider(this.player, this.crate2)
		this.physics.add.collider(this.player, this.crate)



		
		//camera
		this.cameras.main.setBounds(0, 0, window.innerWidth*2, window.innerHeight)
		this.cameras.main.startFollow(this.player, true, 0.25, 0.25)
		//extend world physics	
        this.physics.world.setBounds(0, 0, window.innerWidth*2, window.innerHeight)
	

		// Input keys
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        // this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }

	

	

    update() {
		this.player.update()
		this.crate.update()
		this.crate2.update()
		   
		
		
	}		
}