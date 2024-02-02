import * as tf from "@tensorflow/tfjs";

import { inputs, outputs } from "./dataset.js";
import { startTests } from "./test.js";

export const model = tf.sequential();

model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

const xs = tf.tensor2d(inputs, [inputs.length, 1]);
const ys = tf.tensor2d(outputs, [outputs.length, 1]);

await model.fit(xs, ys, { epochs: 1000 });

startTests(model);
