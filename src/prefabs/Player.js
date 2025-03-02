class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture = "player") {
        super(scene, x, y, texture); // Call Sprite parent class
        scene.add.existing(this); // Add Player to existing scene
        this.scene = scene;
        scene.physics.add.existing(this);

        // Setting Player's Physics
        this.body.onCollide = true;
		this.body.setCollideWorldBounds(true)
        this.setGravityY(600); // Increase gravity for better jumping physics

        // Player Jump & Movement vars
        this.VEL = 300;
        this.jumpHeight = -400; // Stronger jump force

	
    }

    update() {
        // Player movement
        let direction = new Phaser.Math.Vector2(0);
        
        if (this.scene.leftKey.isDown) {
            direction.x = -1;
            this.setFlipX(true);
        } else if (this.scene.rightKey.isDown) {
            direction.x = 1;
            this.setFlipX(false);
        }

        if (this.scene.upKey.isDown && this.body.blocked.down) {
            this.setVelocityY(this.jumpHeight);
        }

        this.setVelocityX(this.VEL * direction.x);
    }
}
