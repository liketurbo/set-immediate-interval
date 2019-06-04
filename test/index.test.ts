import setImmediateInterval from '../src/index';

test('in 250 ms with interval 100 ms should be called 3 times', done => {
  let count = 0;

  setImmediateInterval(() => {
    count++;
  }, 100);

  setTimeout(() => {
    expect(count).toBe(3);
    done();
  }, 250);
});
