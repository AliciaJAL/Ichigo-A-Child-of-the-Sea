class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture = "player") {
		super(scene, x, y, texture) // call Sprite parent class
        scene.add.existing(this)           // add Player to existing scene
		this.scene = scene
		scene.physics.add.existing(this) 

		// Setting Player's Physics
        this.body.onCollide = true
		this.setGravityY(100)

		// Player Jump & Movement vars
		this.VEL = 500
		this.jump = false
		this.jumpHeight = -300
		
		}

		update(time,dt) {
		// player movement
		 this.direction = new Phaser.Math.Vector2(0)
		 if (this.scene.leftKey.isDown) {
			 this.direction.x = -1
		 } else if (this.scene.rightKey.isDown) {
			 this.direction.x = 1
		 }
	 
		 if (this.scene.upKey.isDown) {
			if (!this.jump) {
				this.body.setVelocity(this.jumpHeight)
				this.jump = true;
			}
		}
	
		if (this.scene.upKey.isUp) {
			this.jump = false
		}


		 // else if (this.scene.downKey.isDown) {
			// this.direction.y = 1 }
	 
		 this.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)

		}
}