class ProgressBar {
	constructor(ctx, timeLimit) {
		this.ctx = ctx;
		this.timeLimit = timeLimit;
		this.timeRemaining = this.timeLimit;
		this.timeRatio = this.timeRemaining / this.timeLimit;

		this.X = 0;
		this.Y = 0;
		this.W = this.ctx.canvas.width;
		this.H = this.ctx.canvas.height;

		this.x = this.X;
		this.y = this.Y;
		this.w = this.W;
		this.h = this.H;

		this.sx = this.X;
		this.sy = this.Y;
		this.sw = 280;
		this.sh = 2160;
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
			//this.move();
		}
	}

	draw() {
		//this.h = this.H * this.timeRatio;
		this.y = this.H - this.H * this.timeRatio;
		this.sy = this.sh - this.sh * this.timeRatio;

	 	this.ctx.drawImage(
			this.img,
			this.sx,
			this.sy,
			this.sw,
			this.sh,
			this.x,
			this.y,
			this.w,
			this.h
		); 

/* 		this.ctx.drawImage(
			this.img,
			this.sx,
			this.sy,
			this.sw,
			this.sh,
			this.x,
			this.y + this.H,
			this.w,
			this.h
		); */
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
