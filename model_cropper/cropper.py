
import sys
import time
import numpy as np
import tensorflow as tf
import cv2
import matplotlib.pyplot as plt
from PIL import Image
import keras
import os
import tqdm

sys.path.append("..")

from utils import label_map_util


PATH_TO_CKPT = './model/cal.pb'

PATH_TO_LABELS = './protos/face_label_map.pbtxt'

NUM_CLASSES = 2

label_map = label_map_util.load_labelmap(PATH_TO_LABELS)
categories = label_map_util.convert_label_map_to_categories(label_map, max_num_classes=NUM_CLASSES, use_display_name=True)
category_index = label_map_util.create_category_index(categories)

def load_image_into_numpy_array(image):
  (im_width, im_height) = image.size
  return np.array(image.getdata()).reshape(
      (im_height, im_width, 3)).astype(np.uint8)

def get_boxes(image,boxes,scores,min_score_thresh=.7):
  get_some_help = []
  im_width, im_height = Image.fromarray(image).size
  for i in range(0, len(boxes)):
    box = boxes[i]
    if scores[i] > min_score_thresh:
      get_some_help.append([int(i) for i in [box[0] * im_width, box[1] * im_width, box[2] * im_height, box[3] * im_height]])
  return get_some_help


def cropper_numpy_run(image):
    """
    Args:
    image: uint8 numpy array with shape (img_height, img_width, 3) 
    """
    detection_graph = tf.Graph()
    with detection_graph.as_default():
        od_graph_def = tf.compat.v1.GraphDef() 
        with tf.io.gfile.GFile(PATH_TO_CKPT, 'rb') as fid:
            serialized_graph = fid.read()
            od_graph_def.ParseFromString(serialized_graph)
            tf.import_graph_def(od_graph_def, name='')

    with detection_graph.as_default():
        config = tf.compat.v1.ConfigProto()
        config.gpu_options.allow_growth = True
        with tf.compat.v1.Session(graph=detection_graph, config=config) as sess:
            

            image_np = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

            image_np_expanded = np.expand_dims(image_np, axis=0)
            image_tensor = detection_graph.get_tensor_by_name('image_tensor:0')
            boxes = detection_graph.get_tensor_by_name('detection_boxes:0')
            scores = detection_graph.get_tensor_by_name('detection_scores:0')
            classes = detection_graph.get_tensor_by_name('detection_classes:0')
            num_detections = detection_graph.get_tensor_by_name('num_detections:0')


            (boxes, scores, classes, num_detections) = sess.run([boxes, scores, classes, num_detections],feed_dict={image_tensor: image_np_expanded})

            box = get_boxes(image, np.squeeze(boxes), np.squeeze(scores), min_score_thresh=.95)
            return box
        

def cropper_path_run(image):
    """
    Args:
    image: string path to image
    """
    detection_graph = tf.Graph()
    with detection_graph.as_default():
        od_graph_def = tf.compat.v1.GraphDef() 
        with tf.io.gfile.GFile(PATH_TO_CKPT, 'rb') as fid:
            serialized_graph = fid.read()
            od_graph_def.ParseFromString(serialized_graph)
            tf.import_graph_def(od_graph_def, name='')

    with detection_graph.as_default():
        config = tf.compat.v1.ConfigProto()
        config.gpu_options.allow_growth = True
        with tf.compat.v1.Session(graph=detection_graph, config=config) as sess:
            
            image = Image.open(image)
            image = np.uint8(image)
            image_np = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

            image_np_expanded = np.expand_dims(image_np, axis=0)
            image_tensor = detection_graph.get_tensor_by_name('image_tensor:0')
            boxes = detection_graph.get_tensor_by_name('detection_boxes:0')
            scores = detection_graph.get_tensor_by_name('detection_scores:0')
            classes = detection_graph.get_tensor_by_name('detection_classes:0')
            num_detections = detection_graph.get_tensor_by_name('num_detections:0')


            # saver = tf.compat.v1.train.Saver()
            # saver.save(sess, 'checkpoint1.ckpt', global_step=0)
            # saver.save(sess, 'checkpoint1.chpt')

            (boxes, scores, classes, num_detections) = sess.run([boxes, scores, classes, num_detections],feed_dict={image_tensor: image_np_expanded})
            # print([n.name for n in tf.compat.v1.get_default_graph().as_graph_def().node])
            box = scores

            
            return box


# class RestoreCkptCallback(keras.callbacks.Callback):
#     def __init__(self, pretrained_file):
#         self.pretrained_file = pretrained_file
#         self.sess = keras.backend.get_session()
#         self.saver = tf.train.Saver()
#     def on_train_begin(self, logs=None):
#         if self.pretrian_model_path:
#             self.saver.restore(self.sess, self.pretrian_model_path)
#             print('load weights: OK.')

# model.compile(loss='categorical_crossentropy', optimizer='rmsprop')
# restore_ckpt_callback = RestoreCkptCallback(pretrian_model_path=PATH_TO_CKPT) 
# model.fit(x_train, y_train, batch_size=128, epochs=20, callbacks=[restore_ckpt_callback])
box = cropper_path_run('000_10_image.png')
print(box)


# protobuf_to_checkpoint_conversion(PATH_TO_CKPT,'.\\chk')
# tf.keras.models.model_from_config('pipeline.config')

