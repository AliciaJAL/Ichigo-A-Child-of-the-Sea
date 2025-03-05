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

		this.objects = this.physics.add.group();	 // Creates a dynamic physic group
		this.staticGroup = this.physics.add.staticGroup();	// Defining static group for static objects like ground and platforms

		// Add elements and at the end add if in staticGroup or objects (non static)
		this.sand = new Sand(this, window.innerWidth / 2, window.innerHeight - (window.innerHeight / 10), this.staticGroup)
		this.crate1 = new Crate(this, window.innerWidth / 5, window.innerHeight - (window.innerHeight / 5), this.objects)
		this.crate2 = new Crate(this, window.innerWidth / 3, window.innerHeight - (window.innerHeight / 5), this.objects)
		this.crate3 = new Crate(this, window.innerWidth / 1.5, window.innerHeight - (window.innerHeight / 5), this.objects)
		this.player = new Player(this, window.innerWidth / 10, window.innerHeight - (window.innerHeight / 5), this.objects)

		// Add collisions to static and non static objects

		// Check when objects like crates or the player collide with objects in this.staticGroup (like the sand)
		this.physics.add.collider(this.staticGroup, this.objects, (ground, obj) => {
			obj.setVelocityY(0)
		
		})
		this.physics.add.collider(this.objects, this.objects, (obj1, obj2) => {})


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
		   
		
		
	}		
}