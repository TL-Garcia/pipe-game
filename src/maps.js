const loadMap = {

    1: (that) => {
        that.currentLevel.addPipe(0, 1, 90);
        that.currentLevel.addCurve(1, 1, 90);
        that.currentLevel.addCurve(1, 2, 270);
        that.currentLevel.addT(2, 2, 0);
        that.currentLevel.addPipe(3, 2, 0);
        that.currentLevel.addPipe(4, 2, 0);
        that.currentLevel.addCurve(5, 2, 0);
        that.currentLevel.addPipe(5, 3, 0);
        that.currentLevel.addCurve(5, 4, 0);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);
    },
    2: (that) => {
        that.currentLevel.addCurve(0, 1, 270);
        that.currentLevel.addPipe(0, 2, 0);
        that.currentLevel.addPipe(0, 3, 0);
        that.currentLevel.addCurve(0, 4, 0);
        that.currentLevel.addCurve(1, 4, 0);
        that.currentLevel.addPipe(1, 3, 0);
        that.currentLevel.addPipe(1, 2, 0);
        that.currentLevel.addCurve(1, 1, 0);
        that.currentLevel.addPipe(2, 1, 0);
        that.currentLevel.addCurve(3, 1, 0);
        that.currentLevel.addPipe(3, 2, 0);
        that.currentLevel.addPipe(3, 3, 0);
        that.currentLevel.addCurve(3, 4, 90);
        that.currentLevel.addCurve(4, 4, 0);
        that.currentLevel.addCurve(4, 3, 0);
        that.currentLevel.addCurve(5, 3, 0);
        that.currentLevel.addCurve(5, 4, 0);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);

    },

    3: (that) => {
        that.currentLevel.addPipe(0, 1, 0);
        that.currentLevel.addT(1, 1, 0);
        that.currentLevel.addCurve(1, 0, 0);
        that.currentLevel.addPipe(2, 0, 0);
        that.currentLevel.addCurve(3, 0, 0);
        that.currentLevel.addPipe(3, 1, 0);
        that.currentLevel.addPipe(3, 2, 0);
        that.currentLevel.addCurve(4, 2, 0);
        that.currentLevel.addCurve(4, 1, 0);
        that.currentLevel.addPipe(5, 2, 0);

        that.currentLevel.addPipe(1, 2, 0);
        that.currentLevel.addCurve(1, 3, 0);
        that.currentLevel.addCurve(0, 3, 0);
        that.currentLevel.addPipe(0, 4, 0);
        that.currentLevel.addCurve(0, 5, 0);
        that.currentLevel.addPipe(1, 5, 0);
        that.currentLevel.addCurve(2, 5, 0);
        that.currentLevel.addPipe(2, 4, 0);
        that.currentLevel.addCurve(2, 3, 0);
        that.currentLevel.addPipe(3, 3, 0);
        that.currentLevel.addPipe(4, 3, 0);
        that.currentLevel.addCurve(5, 3, 0);
        that.currentLevel.addCurve(5, 4, 0);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);
    },

    4: (that) => {
        that.currentLevel.addPipe(0, 1, 0);
        that.currentLevel.addCurve(1, 1, 0);
        that.currentLevel.addCurve(1, 0, 0);
        that.currentLevel.addPipe(2, 0, 0);
        that.currentLevel.addCurve(3, 0, 0);

        that.currentLevel.addPipe(4, 0, 0);
        that.currentLevel.addPipe(5, 0, 0);
        that.currentLevel.addPipe(5, 1, 0);
        that.currentLevel.addPipe(5, 2, 0);
        that.currentLevel.addCurve(5, 3, 0);

        that.currentLevel.addPipe(3, 1, 0);
        that.currentLevel.addCurve(3, 2, 0);
        that.currentLevel.addCurve(2, 2, 0);
        that.currentLevel.addPipe(2, 3, 0);
        that.currentLevel.addCurve(2, 4, 0);
        that.currentLevel.addPipe(3, 4, 0);
        that.currentLevel.addPipe(4, 4, 0);
        that.currentLevel.addT(5, 4, 90);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);
    },
    5: (that) => {
        that.currentLevel.addT(0, 1, 0);
        that.currentLevel.addPipe(0, 2, 0);
        that.currentLevel.addT(0, 3, 0);
        that.currentLevel.addCurve(1, 3, 0);
        that.currentLevel.addCurve(1, 2, 0);
        that.currentLevel.addT(2, 2, 0);
        that.currentLevel.addCurve(3, 2, 0);
        that.currentLevel.addCurve(3, 3, 0);
        that.currentLevel.addCurve(4, 3, 0);
        that.currentLevel.addCurve(4, 4, 0);
        that.currentLevel.addCurve(5, 4, 0);
        that.currentLevel.addCurve(5, 3, 0);

        that.currentLevel.addCurve(0, 0, 0);
        that.currentLevel.addPipe(1, 0, 0);
        that.currentLevel.addPipe(2, 0, 0);
        that.currentLevel.addCurve(3, 0, 0);
        that.currentLevel.addPipe(3, 1, 0);

        that.currentLevel.addCurve(0, 4, 0);
        that.currentLevel.addCurve(1, 4, 0);
        that.currentLevel.addCurve(1, 5, 0);
        that.currentLevel.addPipe(2, 5, 0);
        that.currentLevel.addCurve(3, 5, 0);

        that.currentLevel.setStart(0, 1);
        that.currentLevel.setEnd(5, 4);
    }
};