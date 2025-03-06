class Wave extends PhysicsObject {
	constructor(scene, x, y, texture = "greatWave", group) {
		super(scene, x, y, texture, group) // call Sprite parent class

		this.setOrigin(1, 1)
		this.setScale(0.3)

		// this.scene.physics.world.enable(this)
		// Set Physics Body 
		this.body.setSize(this.width * 0.2, this.height*0.8)
		this.body.setOffset(this.width/1.7, this.height/7)

		// Physics Properties
		this.body.allowGravity = false
		this.setCollideWorldBounds(false) 
	}

	update() {
		this.setVelocityX(500)
		console.log("Wave Velocity X: " + this.body.velocity.x)
		
		
	}
}