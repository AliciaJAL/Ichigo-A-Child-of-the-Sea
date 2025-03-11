class Debris extends PhysicsObject {

    constructor(scene, x, y, group) {
        super(scene, x, y, "debris", group); // Call Sprite parent class
		
		this.setDisplaySize(800, window.innerHeight / 3.8)
		this.setOrigin(0, 1)


		// Physics Body (so objects are not exactly on top of the sand)
		let sandHeight = 0.1
		this.body.setSize(this.width , this.height*(1-sandHeight))
		this.body.setOffset(0, this.height*sandHeight)

		// Setting Physics
		this.body.setAllowGravity(false)
		this.body.setImmovable(true)		
	}
}