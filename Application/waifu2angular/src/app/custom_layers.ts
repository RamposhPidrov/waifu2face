
import * as tf from '@tensorflow/tfjs';


export class HardSwish extends tf.layers.Layer {

  //return x * K.relu(x + 3.0, max_value=6.0) / 6.0
  alpha:any;
  // constructor(config) {
  //   super(config);
  //   this.alpha = config.alpha;
  // }
  constructor() {
    super({})
  }

  call(input) {
    return tf.tidy(() => {
     
      let x = input.toFloat(); 
      return tf.mul(x, tf.relu6(x.add(3.0))).div(6.0);
      //return tf.sigmoid(x.mul(this.alpha)).mul(x);
    });
  }

  computeOutputShape(inputShape){
    return inputShape;
  }

  static get className() {
  return 'HardSwish';
  }

  getConfig() {
    const config = {alpha: this.alpha};
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
}


export class Relu6 extends tf.layers.Layer {

  //return x * K.relu(x + 3.0, max_value=6.0) / 6.0
  alpha:any;
  // constructor(config) {
  //   super(config);
  //   this.alpha = config.alpha;
  // }
  constructor() {
    super({})
  }

  call(input) {
    return tf.tidy(() => {
      const x = input.toFloat(); //tf.getExactlyOneTensor(input);
      return tf.relu6(x);
      //return tf.sigmoid(x.mul(this.alpha)).mul(x);
    });
  }

  computeOutputShape(inputShape){
    return inputShape;
  }

  static get className() {
  return 'Relu6';
  }

  getConfig() {
    const config = {alpha: this.alpha};
    const baseConfig = super.getConfig();
    Object.assign(config, baseConfig);
    return config;
  }
}


export class Lambda extends tf.layers.Layer {
  constructor() {
    super({})
  }

  call(input) {
    return tf.tidy(() => {  
      console.log(input[0].dataSync())
      console.log(tf.squaredDifference(input[0], input[1]).dataSync())
      return input;
      //return tf.sigmoid(x.mul(this.alpha)).mul(x);
    });
  }

  static get className() {
    return 'Lambda';
  }

}


   

   
   
// export class HardSwish extends tf.layers.Layer {
//     constructor() {
//       super({});
//       // TODO(bileschi): Can we point to documentation on masking here?
//       this.supportsMasking = true;
//     }
  
//     /**
//      * This layer only works on 4D Tensors [batch, height, width, channels],
//      * and produces output with twice as many channels.
//      *
//      * layer.computeOutputShapes must be overridden in the case that the output
//      * shape is not the same as the input shape.
//      * @param {*} inputShapes
//      */
//     computeOutputShape(inputShape) {
//       return [inputShape[0], inputShape[1], inputShape[2], 2 * inputShape[3]]
//     }
  
//     /**
//      * Centers the input and applies the following function to every element of
//      * the input.
//      *
//      *     x => [max(x, 0), max(-x, 0)]
//      *
//      * The theory being that there may be signal in the both negative and positive
//      * portions of the input.  Note that this will double the number of channels.
//      * @param inputs Tensor to be treated.
//      * @param kwargs Only used as a pass through to call hooks.  Unused in this
//      *   example code.
//      */
//     call(inputs, kwargs) {
//       let input = inputs;
//       if (Array.isArray(input)) {
//         input = input[0];
//       }
//       this.invokeCallHook(inputs, kwargs);
//       const origShape = input.shape;
//       const flatShape =
//           [origShape[0], origShape[1] * origShape[2] * origShape[3]];
//       const flattened = input.reshape(flatShape);
//       const centered = tf.sub(flattened, flattened.mean(1).expandDims(1));
//       const pos = centered.relu().reshape(origShape);
//       const neg = centered.neg().relu().reshape(origShape);
//       return tf.concat([pos, neg], 3);
//     }
  
//     /**
//      * If a custom layer class is to support serialization, it must implement
//      * the `className` static getter.
//      */
//     static get className() {
//       return 'HardSwish';
//     }
//   }
//   tf.serialization.registerClass(HardSwish);  // Needed for serialization.
  

   
   
   

   
   