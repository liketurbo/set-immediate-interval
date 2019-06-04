# Set Immediate Interval

Create an interval that executes callback function without delay at the first time. _Typescript supported._

![npm](https://img.shields.io/npm/v/set-immediate-interval.svg)
![npm](https://img.shields.io/npm/dw/set-immediate-interval.svg)
![npm](https://badgen.net/bundlephobia/min/set-immediate-interval)
[![Build Status](https://travis-ci.org/liketurbo/set-immediate-interval.svg?branch=master)](https://travis-ci.org/liketurbo/set-immediate-interval)
[![Coverage Status](https://coveralls.io/repos/github/liketurbo/set-immediate-interval/badge.svg?branch=master)](https://coveralls.io/github/liketurbo/set-immediate-interval?branch=master)

## API

#### `setImmediateInterval(callback, ms)`

- `callback`: `function` - Required. The function that will be executed
- `ms`: `number` - Required. The intervals (in milliseconds) on how often to execute the code

## Example

```javascript
import setImmediateInterval from 'set-immediate-interval';

const interval = setImmediateInterval(() => console.log('Hello, World!'), 1000);

setTimeout(() => clearInterval(interval), 5000);
```

## License

MIT
