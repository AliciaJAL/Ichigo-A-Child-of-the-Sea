class Crate extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture = "crate") {
		super(scene, x, y, texture) // call Sprite parent class
        scene.add.existing(this)           // add Player to existing scene
		this.scene = scene
		scene.physics.add.existing(this) 

		// Setting Physics
        this.body.onCollide = true
		this.body.setCollideWorldBounds(true)	
		//this.setBounceX(1)	
		
		}

		update(time=0,dt=0) {
			this.setVelocityX(this.body.velocity.x*.9)
		}
}