class ProgressBar {
	constructor(ctx, timeLimit) {
		this.ctx = ctx;
		this.timeLimit = timeLimit;
		this.timeRemaining = this.timeLimit;
		this.timeRatio = this.timeRemaining / this.timeLimit;

		this.x = 0;
		this.y = 0;
		this.w = this.ctx.canvas.width;
		this.h = this.ctx.canvas.height;
		this.vy = -2;

		this.img = new Image();
		this.img.src = '../img/fluid.png';
	}

	updateTime() {
		this.timeRatio = this.timeRemaining / this.timeLimit;
		this.timeRemaining--;
		if (this.timeRemaining % 20 === 0) {
			this._clear();
			this.draw();
			this.move();
		}
	}

	draw() {
		this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
		this.ctx.drawImage(this.img, this.x, this.y + this.h, this.w, this.h);
	}

	move() {
		this.y += this.vy;

		if (this.y + this.h <= 0) {
			this.y = 0;
		}
	}

	_clear() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}
}
