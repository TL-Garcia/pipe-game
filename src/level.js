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

        this.unifiedGrid = [] 

        this.path = [];

        this.activationSound = new Audio('./sounds/activation.wav');
    }

    setStart(x, y) {
        this.start = this.grid[y][x];
        this.start.active = true;
        this.path.push(this.start);
    }

    setEnd(x, y) {
        this.end = this.grid[y][x];
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

    unifyGrid() {
        this.unifiedGrid = [].concat.apply([], this.grid)
    }



    changeState(target) {
        const outcome = this._decideOutcome(target);
        const action = target === this.start ? 'activate' : outcome[0];
        const neighbours = outcome[1];
        

        switch (action) {
            case 'activate':
                target.active = true;
                this.path.push(target);
                this.activationSound.play();
                neighbours.length > 0 && neighbours.forEach(n => this.changeState(n));

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
                neighbours.length > 0 && neighbours.forEach(n => this.changeState(n));
                break;
        }
    }

    _decideOutcome(target) {
        const isTargetActive = this._isTargetActive(target);

        const neighbours = this._areNeighboursActive(target);
        const activeNeighbours = neighbours.aN;
        const inactiveNeighbours = neighbours.iN;

        if (isTargetActive && activeNeighbours.length) {
            const targetIndex = this.path.indexOf(target);

            const neighboursPrecedingTarget = activeNeighbours.filter(n => {
                return (this.path.indexOf(n) < targetIndex);
            })

            if (neighboursPrecedingTarget.length) {
                return ['pass', inactiveNeighbours];
            } else {
                return ['deactivate', inactiveNeighbours];
            }
        } else if (isTargetActive && !activeNeighbours.length) {
            return ['deactivate', inactiveNeighbours];
        } else if (!isTargetActive && activeNeighbours.length) {
            return ['activate', inactiveNeighbours];
        } else if (!isTargetActive && !activeNeighbours.length) {
            return ['pass', inactiveNeighbours];
        } else {
            throw console.error('state conditions do not match');
        }
    }

    _isTargetActive(target) {
        const isTargetOnPath = (this.path.indexOf(target) !== -1)

        if (isTargetOnPath === target.active) {
            return target.active;
        } else {
            throw console.error(`target state doesn't match path`);
        }
    }

    _areNeighboursActive(target) {
        const neighbours = this._findNeigbours(target);

        const activeNeighbours = neighbours.filter(n => this.path.indexOf(n) !== -1);
        const inactiveNeighbours = neighbours.filter(n => this.path.indexOf(n) === -1);

        return {
            aN: activeNeighbours,
            iN: inactiveNeighbours
        };
    }

    _findNeigbours(target) {
        let neighbour;
        const neighbours = [];
        const targetDir = Object.keys(target.direction).filter(d => {
            if (target.direction[d] && this._neighbourExists(target, d)) return true;
        });

        targetDir.forEach(d => {
            switch (d) {
                case 'n':
                    neighbour = this.grid[target.y - 1][target.x];
                    if (neighbour && neighbour.direction.s) neighbours.push(neighbour);
                    break;

                case 'e':
                    neighbour = this.grid[target.y][target.x + 1];
                    if (neighbour && neighbour.direction.w) neighbours.push(neighbour);
                  break;

                case 's':
                    neighbour = this.grid[target.y + 1][target.x];
                    if (neighbour && neighbour.direction.n) neighbours.push(neighbour);
                    break;

                case 'w':
                    neighbour = this.grid[target.y][target.x - 1];
                    if (neighbour && neighbour.direction.e) neighbours.push(neighbour);
                    break;
            }
        })

        return neighbours;
    }

    _neighbourExists(target, checkDir) {
        switch (checkDir) {
            case 'n':
                return (target.y - 1 >= 0);
            case 'e':
                return (target.x + 1 <= 5);
            case 's':
                return (target.y + 1 <= 5);
            case 'w':
                return (target.x - 1 >= 0);
        }
    }

    updateImgs() {
            this.unifiedGrid.forEach(p => p && p.updateImg());
    }
}