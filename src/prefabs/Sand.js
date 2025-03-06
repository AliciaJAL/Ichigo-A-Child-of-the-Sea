class Sand extends PhysicsObject {

    constructor(scene, x, y, group) {
        super(scene, x, y, "sand", group); // Call Sprite parent class
		
		this.setOrigin(0.5, 0.5)
		this.setDisplaySize(window.innerWidth * 2, window.innerHeight / 6)

		// Physics Body (so objects are not exactly on top of the sand)
		let sandHeight = 0.4
		this.body.setSize(this.width , this.height*(1-sandHeight))
		this.body.setOffset(0, this.height*sandHeight)
	}
}