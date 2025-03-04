class PhysicsObject extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, group) {
        super(scene, x, y, texture) 
		this.scene = scene

        // Add to scene
        scene.add.existing(this) 
        scene.physics.add.existing(this)
		group.add(this) 


        // Set physics properties
        this.setBounce(0.05) 
        this.setCollideWorldBounds(true) 

    }
}
