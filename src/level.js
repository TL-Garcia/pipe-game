class Level {
    constructor() {
        this.grid = [
            [],
            [],
            [],
            [],
            [],
            [],
        ]
    }

    addPipe(row, x, y, angle) {
        this.grid[row].push(new Pipe(x, y, angle))
    }
}