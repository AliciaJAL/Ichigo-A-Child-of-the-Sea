class Debris extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, texture = "debris") {
		super(scene, x, y, texture) // call Sprite parent class
        scene.add.existing(this)           // add Player to existing scene
		this.scene = scene
		scene.physics.add.existing(this) 

		// Setting Physics
		this.body.setImmovable(true)
		this.setGravityY(100)
		}

		update(time,dt) {
		}
}