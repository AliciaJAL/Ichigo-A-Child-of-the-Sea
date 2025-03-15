class Crab extends PhysicsObject {
	constructor(scene, x, y, texture, group) {
		super(scene, x, y, texture, group, Crate) // call Sprite parent class
		this.setScale((window.innerHeight/this.height)/12)
		this.setOrigin(0, 1)

			// Set crab movement speed
			this.speed = 100;  

			// Define movement range
			this.startX = x;  // Initial position
			this.range = this.width*2; // Distance the crab can move
	
			// Move left initially
			this.setVelocityX(-this.speed);
		}
	
	update() {
		// Check if crab has moved out of its range
		if (this.x <= this.startX - this.range) {
			this.setVelocityX(this.speed);  // Move right
			this.setFlipX(false); // Face right
		} 
		else if (this.x >= this.startX + this.range) {
			this.setVelocityX(-this.speed); // Move left
			this.setFlipX(true); // Face left
		}

		if (this.texture.key == 'redCrab') {
			this.play('redCrabWalk', true)
		} else {
			this.play('purpleCrabWalk', true)
		}
	}
}