class Game {


    startLevel1() {
        const level1 = new Level();

        level1.addPipe(0, 0, 0)
        level1.addPipe(0, 1, 0)
        level1.addPipe(1, 1, 0)
        level1.addPipe(1, 2, 0)
        level1.addPipe(2, 2, 0)
        level1.addPipe(3, 2, 0)
        level1.addPipe(4, 2, 0)
        level1.addPipe(5, 2, 0)
    }

    _isActive(pipe) {
        if (pipe.x === 0 && pipe.y === 0) return true;
    }
}