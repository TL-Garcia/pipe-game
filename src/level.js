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

        this.path = []
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

    _changeState(target) {
        if (target.x === 0 && target.y === 0) target.active = true;

        const outcome = this._decideOutcome(target);

        switch (outcome) {
            case 'activate':
                target.active = true;
                this.path.push(target);
                break;

            case 'deactivate':
                const tIndex = this.path.indexOf(target);
                const lastIndex = this.path.length - 1;

                for (let i = lastIndex; i >= tIndex; i--) {
                    this.path[i].active = false;
                    this.path.pop();
                }
                break;

            case 'pass':
                return;
        }
    }

    _decideOutcome(target) {
        const isTargetActive = this._isTargetActive(target);
        const activeNeighbours = this._areNeighboursActive(target);
        
        if (isTargetActive && neighbours) {
            const targetIndex = this.path.indexOf(target);

            const neighboursPrecedingTarget = activeNeighbours.filter(n => {
                return (this.path.indexOf(n) < targetIndex);
            })

            if (neighboursPrecedingTarget) {
                return 'pass';
            } else {
                return 'deactivate';
            }
        } else if (!isTargetActive && neighbours) {
            return 'activate'
        } else if (!isTargetActive && !neighbours) {
            return 'pass'
        } else {
            throw console.error();
        }
    }
}

_areNeighboursActive(target) {
    const neighbours = this._findNeigbours(target);

    const activeNeighbours = neighbours.filter(n => this.path.indexOf(n) !== -1);

    if (activeNeighbours.length > 0) {
        return activeNeighbours;
    } else return false;
}

_findNeigbours(target) {
    let neighbour;
    const neighbours = [];
    const targetDir = Object.keys(target.direction).filter(d => {
        if (this._neighbourExists(target, d) && target.direction[d]) return true;
    });

    targetDir.forEach(d => {
        switch (d) {
            case 'n':
                neighbour = this.grid[target.y - 1][target.x];
                if (neighbour.direction.s) neighbours.push(neighbour);
                break;

            case 'e':
                neighbour = this.grid[target.y][target.x + 1];
                if (neighbour.direction.w) neighbours.push(neighbour);
                break;

            case 's':
                neighbour = this.grid[target.y + 1][target.x];
                if (neighbour.direction.n) neighbours.push(neighbour);
                break;

            case 'w':
                neighbour = this.grid[target.y][target.x - 1];
                if (neighbour.direction.e) neighbours.push(neighbour);
                break;
        }
    })

    return neighbours;
}

_neighbourExists(target, checkDir) {
    switch (checkDir) {
        case 'n':
            return (target.y - 1 >= 0 && target.direction.n);
        case 'e':
            return (target.x + 1 <= 5 && target.direction.e);
        case 's':
            return (target.y + 1 <= 5 && target.direction.s);
        case 'w':
            return (target.x - 1 > 0 && target.direction.w);
    }
}