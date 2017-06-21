
import TimeAccumulator from './TimeAccumulator';

const timeAccumulator = new TimeAccumulator(update, 5);

requestAnimationFrame(tick);

function update(time, delta) {
  console.log(time, delta);
}

function tick(time) {
  timeAccumulator.exec(time);
  requestAnimationFrame(tick);
}


