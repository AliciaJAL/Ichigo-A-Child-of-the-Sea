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

		this.sandUpper = new Debris(this, 5100, window.innerHeight - (window.innerHeight / 36), this.staticGroup).setOffset(0,0)
		this.sandUpper.setSize(1630, this.height)



		this.sandUpper2 = new Debris(this, 7800, window.innerHeight - (window.innerHeight / 64), this.staticGroup).setOffset(0,0)
		this.sandUpper2.setSize(1630, this.height)


		this.sandSprite = this.add.sprite(0, 0, "sand").setOrigin(0, 1)
		this.sandSprite.setDisplaySize(window.innerWidth, window.innerHeight/6)
		this.sandSprite.setPosition(0, window.innerHeight)
		this.sandSprite.setScrollFactor(0)

		this.sandUpperSprite = this.add.sprite(0, 0, "sand").setOrigin(0, 1)
		this.sandUpperSprite.setDisplaySize(2000, window.innerHeight/6)
		this.sandUpperSprite.setPosition(4600, window.innerHeight - (window.innerHeight / 7))

		
		this.sandUpperSprite2 = this.add.sprite(0, 0, "sand").setOrigin(0, 1)
		this.sandUpperSprite2.setDisplaySize(1600, window.innerHeight/6)
		this.sandUpperSprite2.setPosition(7700, window.innerHeight - (window.innerHeight / 7))

		this.crate1 = new Crate(this, 650, window.innerHeight - (window.innerHeight / 6), this.objects)
		this.crab1 = new Crab(this, 450, window.innerHeight - (window.innerHeight / 6),'redCrab', this.objects)
		this.debris1 = new Debris(this, 1200,  window.innerHeight-this.sand.displayHeight, this.staticGroup)
		this.crate3 = new Crate(this, 2000, window.innerHeight - (window.innerHeight / 6), this.objects)
		this.crab2 = new Crab(this, 2200, window.innerHeight - (window.innerHeight / 6),'redCrab', this.objects)
		this.crate3 = new Crate(this, 2350, window.innerHeight - (window.innerHeight / 6), this.objects)
		this.debris2 = new Debris(this, 3800,  window.innerHeight-this.sand.displayHeight, this.staticGroup)
		this.crab3 = new Crab(this, 4900, window.innerHeight - (window.innerHeight / 6)-this.crate1.height,'purpleCrab', this.objects)
		this.crate6 = new Crate(this, 4800, window.innerHeight - (window.innerHeight / 6)-this.crate1.height, this.objects)
		this.debris3 = new Debris(this, 7000,  window.innerHeight-this.sand.displayHeight, this.staticGroup)

		this.home = new Homer(this, 8730, window.innerHeight - (window.innerHeight / 4.2), this.staticGroup).setOrigin(0, 1)

		this.crab4 = new Crab(this, 7900, window.innerHeight - (window.innerHeight / 6)-this.crate1.height,'purpleCrab', this.objects)
		this.crate7 = new Crate(this, 8000, window.innerHeight - (window.innerHeight / 6)-this.crate1.height, this.objects)
		this.debris4 = new Debris(this, 9500,  window.innerHeight-this.sand.displayHeight, this.staticGroup)
		this.crate8 = new Crate(this, 9740, window.innerHeight - (window.innerHeight / 6)-this.crate1.height/2, this.objects)
		this.crab5 = new Crab(this, 9900,  this.crate8.height,'purpleCrab', this.objects)

		this.lowDebris = new Debris(this, 9300,  window.innerHeight-this.sand.displayHeight, this.staticGroup).setDisplaySize(200,(window.innerHeight / 32))

		this.rightwall = new Debris(this, 10000,  window.innerHeight-this.sand.displayHeight*2.8, this.staticGroup).setOrigin(0, 1)






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


		this.wave = new Wave(this, 10500, window.innerHeight,"greatWave", this.waveGroup)


		// Add collisions to static and non static objects

		// Check when objects like crates or the player collide with objects in this.staticGroup (like the sand)
		this.physics.add.collider(this.staticGroup, this.objects, (ground, obj) => {
			if (obj.body.touching.down) {
				obj.setVelocityY(0); // Stop downward movement only when touching the ground
			}
		
		})
		this.physics.add.collider(this.objects, this.objects, (obj1, obj2) => {})

		this.waveSFX = this.sound.add('greatWaveSFX', { 
			loop: false, 
			detune: 0, // Ensures no pitch distortions
			rate: 1,   // Default playback speed
			volume: 0.7 //too loud!
		});

		this.physics.add.collider(this.player, this.waveGroup, (player, wave) => {
			this.scene.start('gameOverScene')
		})


		//camera
		this.cameras.main.setBounds(0, 0, 10000, window.innerHeight)
		this.cameras.main.startFollow(this.player, true, 1, 1)
		// get the x coordinate of the camera and update the background's position so it follows the camera

		//extend world physics	
        this.physics.world.setBounds(0, 0, 11000, window.innerHeight)
	

		// Input keys
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
		this.counter=0

		
		// Create Timer
		this.timerText = this.add.text(window.innerWidth-50, 20, 'TIME: 0', {
			fontSize: `${window.innerWidth * 0.02}px`,
			fill: '#000000',
			fontFamily: 'Pacifico, cursive'
		}).setOrigin(1, 0).setScrollFactor(0); // Align text to top-right corner
		
		this.elapsedTime = 0; // Initialize timer

		//TEMPORARY COUNTDOWN
		this.countdownText = this.add.text(window.innerWidth/2, 20, 'WAVE COMING IN: 10', {
			fontSize: `${window.innerWidth * 0.03}px`,
			fill: '#000000',
			fontFamily: 'Pacifico, cursive'
		}).setOrigin(0.5, 0).setScrollFactor(0); // Align text to topmiddle corner
		
    }

    update(time, dt) {
		time /= 1000
		dt /= 1000


		if (this.player.y<410 && this.player.x<9130 && this.player.x>9000){
			this.scene.start('winScene')    
		}

		// Update Timer
		this.elapsedTime += dt; // Convert from milliseconds to seconds
		this.timerText.setText('TIME: ' + Math.round(this.elapsedTime))

		// Update countdown
		this.countdownText.setText('WAVE COMING IN: ' + (10-Math.round(this.elapsedTime)%10))
		if (10-Math.round(this.elapsedTime)%10<4){
			this.countdownText.setFontSize( `${window.innerWidth * 0.04}px`)
			this.countdownText.setFill('#ff0000')
		}else{
			this.countdownText.setFontSize( `${window.innerWidth * 0.03}px`)
			this.countdownText.setFill('#000000')
		}

		// if (this.elapsedTime <= 0) {
		// 	this.scene.start('gameOverScene') 
		// }

		if (Math.round(this.elapsedTime)%10==9){
			this.waveSFX.play()
			this.wave.x= this.cameras.main.scrollX-1000
		}


		// iterating over all the objects in this.objects
		this.objects.getChildren().forEach(obj => {
			obj.update(time, dt)
		});			
	}		
}