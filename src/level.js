class Level {
    constructor() {
        this.grid = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
        ];
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


    setClick() {
        const unifiedGrid = [].concat.apply([], this.grid);
        unifiedGrid.forEach(p => {
            p && p.element.addEventListener('click', () => {
                p.angle += 90;
                p._rotate();
                this.isActive(p);
            });
        });
    }

    isActive(target) {
        if (target.x === 0 && target.y === 0) target.active = true;

        if (target.y - 1 >= 0 && target.direction.n) this._checkNeigbours(target, 'n');

        if (target.x + 1 <= 5 && target.direction.e) this._checkNeigbours(target, 'e');

        if (target.y + 1 <= 5 && target.direction.s) this._checkNeigbours(target, 's');

        if (target.x - 1 > 0 && target.direction.w) this._checkNeigbours(target, 'w');

        if (target.active) console.log(`I'm on ${target.x} ${target.y} and I'm active`)
    }

    _checkNeigbours(target, checkDir) {
        const targetDir = target.direction[checkDir];
        let neighbour;
        let neighbourDir;

        switch (checkDir) {
            case 'n':
                neighbour = this.grid[target.y - 1][target.x] ;
                if (!neighbour) return;
                neighbourDir = neighbour.direction.s;
                break;

            case 'e':
                neighbour = this.grid[target.y][target.x + 1] ;
                if (!neighbour) return;
                neighbourDir = neighbour.direction.w;
                break;

            case 's':
                neighbour = this.grid[target.y + 1][target.x] ;
                if (!neighbour) return;
                neighbourDir = neighbour.direction.n;
                break;

            case 'w':
                neighbour = this.grid[target.y][target.x - 1] ;
                if (!neighbour) return;
                neighbourDir = neighbour.direction.e;
                break;
        }


        if (neighbour.active && neighbourDir) target.active = true;
    }
}