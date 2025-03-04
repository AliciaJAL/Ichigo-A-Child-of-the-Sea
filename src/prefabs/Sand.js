class Sand extends PhysicsObject {

    constructor(scene, x, y, group) {
        super(scene, x, y, "sand", group); // Call Sprite parent class
		
		this.setOrigin(0.5, 0.5)
		this.setDisplaySize(window.innerWidth * 2, window.innerHeight / 5)
	}
}