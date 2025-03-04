class Player extends PhysicsObject {
    constructor(scene, x, y, group) {
        super(scene, x, y, "player", group); // Call Sprite parent class

		this.setOrigin(1,1)
		this.setScale(0.25)

        // Player Jump & Movement vars
        this.VEL = 300;
        this.jumpHeight = -420; // Stronger jump force
		this.setVelocityY(-300);

    }

    update() {
        // Player movement
        let direction = new Phaser.Math.Vector2(0);
        
		direction.x = this.scene.rightKey.isDown - this.scene.leftKey.isDown
		this.setFlipX(direction.x < 0);
		
        if (this.scene.upKey.isDown && this.body.blocked.down) {
            this.setVelocityY(this.jumpHeight);
        }

		console.log(this.body.touching.down)

        this.setVelocityX(this.VEL * direction.x);
    }
}
																															