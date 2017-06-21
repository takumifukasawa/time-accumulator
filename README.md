# time-accumulator

## 使い方

```javascript

import TimeAccumulator from './TimeAccumulator';

// pass func and fps
const timeAccumulator = new TimeAccumulator(update, 5);
requestAnimationFrame(tick);

// 5fpsで実行される
function update(time, delta) {
  console.log(time, delta);
}

function tick(time) {
  timeAccumulator.exec(time);
  requestAnimationFrame(tick);
}
```

