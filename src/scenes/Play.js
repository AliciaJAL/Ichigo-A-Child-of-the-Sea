class Play extends Phaser.Scene {

    constructor() {
        super('playScene')
		
    }


    create() {
		// Add wave to the background & adjust to screen
		this.waveBackground = this.add.sprite(0, 0, "waveBackground").setOrigin(0.5, 0.5)
		this.waveBackground.setScrollFactor(0)

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

		this.objects = this.physics.add.group()	 // Creates a dynamic physic group
		this.staticGroup = this.physics.add.staticGroup()	// Defining static group for static objects like ground and platforms
		this.waveGroup = this.physics.add.group()
		// this.crabGroup = this.physics.add.group()

		// Add elements and at the end add if in staticGroup or objects (non static)
		this.sand = new Sand(this, 0, window.innerHeight - (window.innerHeight / 12), this.staticGroup)

		this.sandSprite = this.add.sprite(0, 0, "sand").setOrigin(0, 1)
		this.sandSprite.setDisplaySize(window.innerWidth, window.innerHeight/6)
		this.sandSprite.setPosition(0, window.innerHeight)
		this.sandSprite.setScrollFactor(0)

		//this.crate2 = new Crate(this, window.innerWidth / 5, window.innerHeight - (window.innerHeight / 6), this.objects)
		this.crate1 = new Crate(this, 350, window.innerHeight - (window.innerHeight / 6), this.objects)
		//this.crate3 = new Crate(this, window.innerWidth / 1.5, window.innerHeight- (window.innerHeight / 6), this.objects)
		this.debris = new Debris(this, 1000,  window.innerHeight-this.sand.displayHeight, this.staticGroup)

		this.anims.create({
			key: 'idle',
			frameRate: 0,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('player', {
				start: 0,
				end: 0
			})

		})

		this.anims.create({
			key: 'walking',
			frameRate: 5,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('player', {
				start: 1,
				end: 6
			})

		})

		this.player = new Player(this, 200, window.innerHeight - (window.innerHeight / 6), this.objects)

		this.warningSigns = this.add.sprite(0,0,'warningSigns').setPosition(window.innerWidth-(window.innerWidth-100), this.player.y-25)
		this.warningSigns.setDisplaySize((window.innerWidth*(546/650))/6, (window.innerHeight*(546/650))/3)

		this.anims.create({
			key: 'redCrabWalk',
			frameRate: 5,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('redCrab', {
				start: 0,
				end: 3			})

		})

		this.anims.create({
			key: 'purpleCrabWalk',
			frameRate: 5,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('purpleCrab', {
				start: 0,
				end: 3			})

		})
		this.redCrab = new Crab(this, 700, window.innerHeight - (window.innerHeight / 6),'redCrab', this.objects)


		this.wave = new Wave(this, -6000, window.innerHeight,"greatWave", this.waveGroup)


		// Add collisions to static and non static objects

		// Check when objects like crates or the player collide with objects in this.staticGroup (like the sand)
		this.physics.add.collider(this.staticGroup, this.objects, (ground, obj) => {
			if (obj.body.blocked.down) {
				obj.setVelocityY(0); // Stop downward movement only when touching the ground
			}
		
		})
		this.physics.add.collider(this.objects, this.objects, (obj1, obj2) => {})

		this.waveSFX = this.sound.add('greatWaveSFX', { 
			loop: false, 
			detune: 0, // Ensures no pitch distortions
			rate: 1,   // Default playback speed
			volume: 0.3 //too loud!
		});

		this.physics.add.collider(this.player, this.waveGroup, (player, wave) => {
			this.waveSFX.play()
			this.scene.start('gameOverScene')
		})


		//camera
		this.cameras.main.setBounds(0, 0, 20000, window.innerHeight)
		this.cameras.main.startFollow(this.player, true, 1, 1)
		// get the x coordinate of the camera and update the background's position so it follows the camera

		//extend world physics	
        this.physics.world.setBounds(0, 0, 20000, window.innerHeight)
	

		// Input keys
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
		this.counter=0

		
		// Create Timer
		this.timerText = this.add.text(window.innerWidth-50, 20, 'TIME: 60', {
			fontSize: `${window.innerWidth * 0.02}px`,
			fill: '#000000',
			fontFamily: 'Pacifico, cursive'
		}).setOrigin(1, 0).setScrollFactor(0); // Align text to top-right corner
		
		this.elapsedTime = 60; // Initialize timer
		
    }

    update(time, dt) {
		time /= 1000
		dt /= 1000

		// Update Timer
		this.elapsedTime -= dt; // Convert from milliseconds to seconds
		this.timerText.setText('TIME: ' + Math.round(this.elapsedTime))

		if (this.elapsedTime <= 0) {
			this.scene.start('gameOverScene') 
		}

		if (Math.round(this.elapsedTime)%10==6){
			this.wave.x= this.cameras.main.scrollX-1000
		}


		// iterating over all the objects in this.objects
		this.objects.getChildren().forEach(obj => {
			obj.update(time, dt)
		});	
		
		this.wave.update()
		this.sand.update()
		
	}		
}