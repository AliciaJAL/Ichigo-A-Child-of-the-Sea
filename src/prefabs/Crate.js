class Crate extends PhysicsObject {
	constructor(scene, x, y, group) {
		super(scene, x, y, "crate", group) // call Sprite parent class
		this.setOrigin(1, 1)
		this.setScale(0.25)
	}

		update(time=0,dt=0) {
			this.setVelocityX(this.body.velocity.x*0.9)
		}
	update() {
		this.setVelocityX(this.body.velocity.x * 0.95)
	}
}