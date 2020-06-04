class Game {


    startLevel1() {
        const level1 = new Level();

        level1.addPipe(1, 1, 0)
        level1.addPipe(2, 1, 0)
        level1.addPipe(2, 2, 0)
        level1.addPipe(3, 2, 0)
        level1.addPipe(3, 3, 0)
        level1.addPipe(3, 4, 0)
        level1.addPipe(3, 5, 0)
        level1.addPipe(3, 6, 0)
    }

    _isActive(pipe) {
        if (pipe.x === 1 && pipe.y === 1) return true;
    }
}