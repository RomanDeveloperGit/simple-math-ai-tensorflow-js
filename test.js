import * as tf from "@tensorflow/tfjs";

export const startTests = async (model) => {
  await model.predict(tf.tensor2d([[1]], [1, 1])).print(); // -3
  await model.predict(tf.tensor2d([[2]], [1, 1])).print(); // -1
  await model.predict(tf.tensor2d([[3]], [1, 1])).print(); // 1
  await model.predict(tf.tensor2d([[4]], [1, 1])).print(); // 3
  await model.predict(tf.tensor2d([[1000]], [1, 1])).print(); // 1995
  await model.predict(tf.tensor2d([[50000]], [1, 1])).print(); // 99995
};
