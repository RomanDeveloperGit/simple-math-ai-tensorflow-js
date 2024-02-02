// y = f(x) = 2 * x - 5
// (0; -5), (5; 5), (10; 15), (15; 25)

const calculateOutput = (input) => 2 * input - 5;

export const inputs = Array.from({ length: 1000 }, (_, index) => [
  index * 0.01,
]);

export const outputs = Array.from({ length: inputs.length }, (_, index) => [
  calculateOutput(inputs[index][0]),
]);
