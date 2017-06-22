
//--------------------------------------------
// 減算方式
//--------------------------------------------

export default class TimeAccumulator {
  constructor(func, fps, chaseCount = 5) {
    this._func = func;
    this._rate = 1000 / fps;
    this._prevTime = -Infinity;
    this._lag = 0;
    this._chaseCount = chaseCount;
  }

  exec(time) {
    if(this._prevTime < 0) {
      this._prevTime = time;
    }

    const currentTime = time;
    const elapsedTime = currentTime - this._prevTime;
    this._lag += elapsedTime;

    let count = 0;
    while(count < this._chaseCount && this._lag > this._rate) {
      this._lag -= this._rate;
      this._func(this._prevTime += this._rate, this._rate);
      count++;
    }
  }
}

