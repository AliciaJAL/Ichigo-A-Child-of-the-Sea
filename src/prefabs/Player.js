class Player extends PhysicsObject {
    constructor(scene, x, y, group) {
        super(scene, x, y, "player", group); // Call Sprite parent class

		this.setOrigin(1,1)
		this.setScale(0.25)

        // Player Jump & Movement vars
        this.VEL = 200;
        this.jumpHeight = -415; // Stronger jump force
		

		// Adjust the physics body size to be smaller
		this.body.setSize(this.width * 0.45)
		

    }

    update() {
        // Player movement
		       // Player movement
		let direction = new Phaser.Math.Vector2(0);
		
        if (this.scene.upKey.isDown && this.body.blocked.down) {
            this.setVelocityY(this.jumpHeight )
        }

        this.setVelocityX(this.VEL * direction.x);

		if (this.scene.leftKey.isDown) {
			this.setVelocityX(-this.VEL)  // Supppose make sure the leftward velocity is smooth
		} else if (this.scene.rightKey.isDown) {
			this.setVelocityX(this.VEL)  // Handle rightward velocity
		}else{
			this.setVelocityX(0)
		}

		// Round the position to avoid subpixel movement causing jitter
		this.setPosition(Math.round(this.x), Math.round(this.y))

		direction.x = this.scene.rightKey.isDown - this.scene.leftKey.isDown
		this.setFlipX(direction.x < 0) 
		
		
		/*
		let direction = new Phaser.Math.Vector2(0);
		
        if (this.scene.upKey.isDown && this.body.blocked.down) {
            this.setVelocityY(this.jumpHeight);
        }

        this.setVelocityX(this.VEL * direction.x);

		if (this.scene.leftKey.isDown) {
			this.setVelocityX(-this.VEL)  // Make sure the leftward velocity is smooth
		} else if (this.scene.rightKey.isDown) {
			this.setVelocityX(this.VEL)  // Handle rightward velocity
		}else{
			this.setVelocityX(0)
		}

		// Round the position to avoid subpixel movement causing jitter
		this.setPosition(Math.round(this.x), Math.round(this.y))
		
		direction.x = this.scene.rightKey.isDown - this.scene.leftKey.isDown
		this.setFlipX(direction.x < 0)*/ 
		
    }
}
																															