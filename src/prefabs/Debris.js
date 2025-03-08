class Debris extends PhysicsObject {
	constructor(scene, x, y, group) {
		super(scene, x, y, "debris", group) // call Sprite parent class
        //scene.add.existing(this)           // add Player to existing scene
		//this.scene = scene
		//scene.physics.add.existing(this) 

		//this.body.setSize(400, 400)
		this.setDisplaySize(400, 250)


		// Setting Physics
		this.body.setAllowGravity(false)
		this.body.setImmovable(true)
		}
}