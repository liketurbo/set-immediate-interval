# Set Immediate Interval

Create an interval that executes callback function without delay at the first time. _Typescript supported._

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
