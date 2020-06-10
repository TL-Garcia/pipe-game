class Game {
    constructor() {
        let currentLevel;
    }

    startLevel1() {
        this.currentLevel = new Level();

        this.currentLevel.addPipe(0, 0, 90)
        this.currentLevel.addCurve(0, 1, 0)
        this.currentLevel.addCurve(1, 1, 90)
        this.currentLevel.addCurve(1, 2, 270)
        this.currentLevel.addT(2, 2, 0)
        this.currentLevel.addPipe(3, 2, 0)
        this.currentLevel.addPipe(4, 2, 0)
        this.currentLevel.addPipe(5, 2, 0)

        this.currentLevel.unifyGrid();
        this.currentLevel.setClick();
    }
}