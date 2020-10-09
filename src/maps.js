const loadMap = {
    1: (that) => {
        that.currentLevel.createPipe(0, 1, 90, StraightPipe);
        that.currentLevel.createPipe(1, 1, 90, CurvedPipe);
        that.currentLevel.createPipe(1, 2, 270, CurvedPipe);
        that.currentLevel.createPipe(2, 2, 0, TPipe);
        that.currentLevel.createPipe(3, 2, 0, StraightPipe);
        that.currentLevel.createPipe(4, 2, 0, StraightPipe);
        that.currentLevel.createPipe(5, 2, 0, CurvedPipe);
        that.currentLevel.createPipe(5, 3, 0, StraightPipe);
        that.currentLevel.createPipe(5, 4, 0, CurvedPipe);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);
    },
    2: (that) => {
        that.currentLevel.createPipe(0, 1, 270, CurvedPipe);
        that.currentLevel.createPipe(0, 2, 0, StraightPipe);
        that.currentLevel.createPipe(0, 3, 0, StraightPipe);
        that.currentLevel.createPipe(0, 4, 0, CurvedPipe);
        that.currentLevel.createPipe(1, 4, 0, CurvedPipe);
        that.currentLevel.createPipe(1, 3, 0, StraightPipe);
        that.currentLevel.createPipe(1, 2, 0, StraightPipe);
        that.currentLevel.createPipe(1, 1, 0, CurvedPipe);
        that.currentLevel.createPipe(2, 1, 0, StraightPipe);
        that.currentLevel.createPipe(3, 1, 0, CurvedPipe);
        that.currentLevel.createPipe(3, 2, 0, StraightPipe);
        that.currentLevel.createPipe(3, 3, 0, StraightPipe);
        that.currentLevel.createPipe(3, 4, 90, CurvedPipe);
        that.currentLevel.createPipe(4, 4, 0, CurvedPipe);
        that.currentLevel.createPipe(4, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(5, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(5, 4, 0, CurvedPipe);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);

    },
    3: (that) => {
        that.currentLevel.createPipe(0, 1, 0, StraightPipe);
        that.currentLevel.createPipe(1, 1, 0, TPipe);
        that.currentLevel.createPipe(1, 0, 0, CurvedPipe);
        that.currentLevel.createPipe(2, 0, 0, StraightPipe);
        that.currentLevel.createPipe(3, 0, 0, CurvedPipe);
        that.currentLevel.createPipe(3, 1, 0, StraightPipe);
        that.currentLevel.createPipe(3, 2, 0, StraightPipe);
        that.currentLevel.createPipe(4, 2, 0, CurvedPipe);
        that.currentLevel.createPipe(4, 1, 0, CurvedPipe);
        that.currentLevel.createPipe(5, 2, 0, StraightPipe);

        that.currentLevel.createPipe(1, 2, 0, StraightPipe);
        that.currentLevel.createPipe(1, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(0, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(0, 4, 0, StraightPipe);
        that.currentLevel.createPipe(0, 5, 0, CurvedPipe);
        that.currentLevel.createPipe(1, 5, 0, StraightPipe);
        that.currentLevel.createPipe(2, 5, 0, CurvedPipe);
        that.currentLevel.createPipe(2, 4, 0, StraightPipe);
        that.currentLevel.createPipe(2, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(3, 3, 0, StraightPipe);
        that.currentLevel.createPipe(4, 3, 0, StraightPipe);
        that.currentLevel.createPipe(5, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(5, 4, 0, CurvedPipe);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);
    },
    4: (that) => {
        that.currentLevel.createPipe(0, 1, 0, StraightPipe);
        that.currentLevel.createPipe(1, 1, 0, CurvedPipe);
        that.currentLevel.createPipe(1, 0, 0, CurvedPipe);
        that.currentLevel.createPipe(2, 0, 0, StraightPipe);
        that.currentLevel.createPipe(3, 0, 0, CurvedPipe);

        that.currentLevel.createPipe(4, 0, 0, StraightPipe);
        that.currentLevel.createPipe(5, 0, 0, StraightPipe);
        that.currentLevel.createPipe(5, 1, 0, StraightPipe);
        that.currentLevel.createPipe(5, 2, 0, StraightPipe);
        that.currentLevel.createPipe(5, 3, 0, CurvedPipe);

        that.currentLevel.createPipe(3, 1, 0, StraightPipe);
        that.currentLevel.createPipe(3, 2, 0, CurvedPipe);
        that.currentLevel.createPipe(2, 2, 0, CurvedPipe);
        that.currentLevel.createPipe(2, 3, 0, StraightPipe);
        that.currentLevel.createPipe(2, 4, 0, CurvedPipe);
        that.currentLevel.createPipe(3, 4, 0, StraightPipe);
        that.currentLevel.createPipe(4, 4, 0, StraightPipe);
        that.currentLevel.createPipe(5, 4, 90, TPipe);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);
    },
    5: (that) => {
        that.currentLevel.createPipe(0, 1, 0, TPipe);
        that.currentLevel.createPipe(0, 2, 0, StraightPipe);
        that.currentLevel.createPipe(0, 3, 0, TPipe);
        that.currentLevel.createPipe(1, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(1, 2, 0, CurvedPipe);
        that.currentLevel.createPipe(2, 2, 0, TPipe);
        that.currentLevel.createPipe(3, 2, 0, CurvedPipe);
        that.currentLevel.createPipe(3, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(4, 3, 0, CurvedPipe);
        that.currentLevel.createPipe(4, 4, 0, CurvedPipe);
        that.currentLevel.createPipe(5, 4, 0, CurvedPipe);
        that.currentLevel.createPipe(5, 3, 0, CurvedPipe);

        that.currentLevel.createPipe(0, 0, 0, CurvedPipe);
        that.currentLevel.createPipe(1, 0, 0, StraightPipe);
        that.currentLevel.createPipe(2, 0, 0, StraightPipe);
        that.currentLevel.createPipe(3, 0, 0, CurvedPipe);
        that.currentLevel.createPipe(3, 1, 0, StraightPipe);

        that.currentLevel.createPipe(0, 4, 0, CurvedPipe);
        that.currentLevel.createPipe(1, 4, 0, CurvedPipe);
        that.currentLevel.createPipe(1, 5, 0, CurvedPipe);
        that.currentLevel.createPipe(2, 5, 0, StraightPipe);
        that.currentLevel.createPipe(3, 5, 0, CurvedPipe);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);
    }
};