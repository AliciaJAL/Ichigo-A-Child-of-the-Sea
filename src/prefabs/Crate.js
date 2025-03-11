class Crate extends PhysicsObject {
	constructor(scene, x, y, group) {
		super(scene, x, y, "crate", group) // call Sprite parent class
		this.setScale((window.innerHeight/this.height)/8)
		this.setOrigin(0, 1)

	}

	update() {
		this.setVelocityX(this.body.velocity.x * 0.95)
	}
}