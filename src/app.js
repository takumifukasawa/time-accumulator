
import TimeAccumulator from './TimeAccumulator';
import TimeAccumulatorLagged from './TimeAccumulatorLagged';

const timeAccumulator = new TimeAccumulator(update, 30);

//elapsedをつかった減算方式
//const timeAccumulator = new TimeAccumulatorLagged(update, 30);

requestAnimationFrame(tick);

function update(time, delta) {
  console.log(time, delta);
}

function tick(time) {
  timeAccumulator.exec(time);
  requestAnimationFrame(tick);
}


