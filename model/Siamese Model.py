from mobilenet_v3_small import MobileNetV3_Small
from keras.optimizers import Adam
import numpy as np
from keras.preprocessing.image import ImageDataGenerator
from keras.layers import Input, Lambda, Dense
from keras.models import Model
from keras.utils import Sequence
from keras import backend as K
from os import listdir
from PIL import Image
from os.path import isfile, join
import pandas as pd
from PIL import Image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg


## shape = (300, 300, 3)

def get_siamese_model(input_shape):
    def euclidean_distance(vects):
    x, y = vects
    sum_square = K.sum(K.square(x - y), axis=1, keepdims=True)
    return K.sqrt(K.maximum(sum_square, K.epsilon()))


    def eucl_dist_output_shape(shapes):
        shape1, shape2 = shapes
        return (shape1[0], 1)

    left_input = Input(input_shape)
    right_input = Input(input_shape)
     encoded_l = model1(left_input)
    encoded_r = model1(right_input)
    L1_layer = Lambda(euclidean_distance,
                  output_shape=eucl_dist_output_shape)([encoded_l, encoded_r])
    prediction = Dense(1,activation='sigmoid')(L1_layer)
    siamese_net = Model(inputs=[left_input,right_input],outputs=L1_layer)
    return siamese_net


def build(shape):
    model_shape = shape
    model1 = MobileNetV3_Small(model_shape, 100).build()
    model = get_siamese_model(model_shape)
    return model

def load_weights(model, dir, name):
    model.load_weights(os.path.join(dir, name))

def predict(model, shape, image1_path, image2_path):
    shape1 = shape
    image1 = Image.open(image1_path)
    image1 = image1.resize((shape1[0],shape1[1]))
    data1 = np.array(image1)
    image2 = Image.open(image2_path)
    image2 = image2.resize((shape1[0],shape1[1]))
    data2 = np.array(image2)
    return model.predict([np.array(data1).reshape(1, model_shape[0], model_shape[1], model_shape[2]), np.array(data2).reshape(1, model_shape[0], model_shape[1], model_shape[2])])

    

