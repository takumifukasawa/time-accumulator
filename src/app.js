
//import TimeAccumulator from './TimeAccumulator';
import TimeAccumulator from './TimeAccumulatorLagged';

const timeAccumulator = new TimeAccumulator(update, 5);

requestAnimationFrame(tick);

function update(time, delta) {
  console.log(time, delta);
}

function tick(time) {
  timeAccumulator.exec(time);
  requestAnimationFrame(tick);
}


