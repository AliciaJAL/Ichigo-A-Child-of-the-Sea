class Crab extends PhysicsObject {
	constructor(scene, x, y, texture, group) {
		super(scene, x, y, texture, group, Crate) // call Sprite parent class
		this.setScale((window.innerHeight/this.height)/12)
		this.setOrigin(0, 1)

		this.body.setSize(this.width, this.height/2)
		this.body.setOffset(0, this.height/2)




			// Set crab movement speed
			this.speed = 150;  

			// Define movement range
			this.startX = x;  // Initial position
			this.range = 400; // Distance the crab can move
	
			// Move left initially
			this.setVelocityX(-this.speed);
		}
	
	update() {

		// Check if crab has moved out of its range
		if (this.x <= this.startX - this.range) {
			this.setVelocityX(this.speed);  // Move right
			this.setFlipX(false); // Face right
			this.setImmovable(true)
		} 
		else if (this.x >= this.startX + this.range) {
			this.setVelocityX(-this.speed); // Move left
			this.setFlipX(true); // Face left
			this.setImmovable(true)
		}else{
			this.setImmovable(false)
		}
		if (this.body.velocity.x > 0 && this.body.velocity.x <this.speed){
			this.setVelocityX((this.body.velocity.x+5))
		}
		if (this.body.velocity.x < 0 && this.body.velocity.x > -this.speed) {
			this.setVelocityX((this.body.velocity.x-5))
		}


		if (this.texture.key == 'redCrab') {
			this.play('redCrabWalk', true)
		} else {
			this.play('purpleCrabWalk', true)
		}
	}
}