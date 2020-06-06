class Level {
    constructor() {
        this.grid = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
        ]
    }

    addPipe(x, y, angle) {
        this.grid[y][x] = new StraightPipe(x, y, angle);
    }

    addCurve(x, y, angle) {
        this.grid[y][x] = new CurvedPipe(x, y, angle);
    }

    addT(x, y, angle) {
        this.grid[y][x] = new TPipe(x, y, angle);
    }
}