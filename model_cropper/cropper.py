
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
from utils import visualization_utils_color as vis_util


PATH_TO_CKPT = './model/frozen_inference_graph_face.pb'

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
    #   print(box)
      get_some_help.append([int(i) for i in [box[0] * im_height, box[1] * im_width, box[2] * im_height, box[3] * im_width]])
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
            
            box = get_boxes(image, np.squeeze(boxes), np.squeeze(scores), min_score_thresh=.01)
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
            vis_util.visualize_boxes_and_labels_on_image_array(
        #  image_np,
            image_np,
            np.squeeze(boxes),
            np.squeeze(classes).astype(np.int32),
            np.squeeze(scores),
            category_index,
            use_normalized_coordinates=True,
            line_thickness=4)
            imgplot = plt.imshow(image_np)
            plt.show()
            box = get_boxes(image, np.squeeze(boxes), np.squeeze(scores), min_score_thresh=.01)

            
            return box


from PIL import Image

from os import listdir
from os.path import isfile, join

import numpy as np


w = [500000, 2]


dird = '..\\images\\train\\'
onlyfiles = [f for f in listdir('..\\images\\train\\') if isfile(join('..\\images\\train\\', f))]
for i in ['016_10_image.png',"016_07_image.png","016_08_image.png","017_10_image.png"]:#onlyfiles[450:]:

    img = Image.open(dird + i)
    # if (img.size[0] == 1920):
    #     print()
    #     img = img.crop((500,0,500+700,img.size[1]))
    img1 = np.uint8(img)
    box = cropper_path_run(dird + i)
    # box.sort(key=lambda x: np.linalg.norm(np.array([1920/2, 1080/2]) - np.array([x[1]+(x[1]-x[3])/2, np.interp(x[1]+(x[1]-x[3])/2, [x[1], x[3]], [x[0], x[2]])])), reverse=True)
    print(i)
    # for x in box:
        # print((1/abs(x[1]+(x[3]-x[1])/2-img.size[0]/2))*w[0]/abs((x[3] - x[1])*(x[2] - x[0]))*w[1])
    print(len(box))

    box.sort(key=lambda x: (abs(x[1]+(x[3]-x[1])/2-img.size[0]/2))*w[0], reverse=True)
    box = box[:3]
    box.sort(key=lambda x:abs((x[3] - x[1])*(x[2] - x[0]))*w[1], reverse=True)
    
    
    
   
    
    for x in box[:1]:
        left_x = x[1] - 15
        left_y = x[0] - 15
        img.crop((left_x,left_y,x[3] + 15,x[2] + 15)).save(dird + '..\\croped\\{}'.format(i))


# '016_10_image.png',"016_07_image.png","016_08_image.png","017_10_image.png","019_06_image.png"



# print(box)


# img = Image.open('000_10_image.png')
# img = np.uint8(img)
# box = cropper_numpy_run(img)
# for x in box:
#     print(x)
#     print()