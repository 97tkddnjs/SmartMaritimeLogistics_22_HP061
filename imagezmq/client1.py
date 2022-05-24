import sys
import time
import numpy as np
import cv2
import imagezmq

# Create 2 different test images to send
# A green square on a black background
# A red square on a black background

sender = imagezmq.ImageSender()
i = 0
image_window_name = 'From Sender'
while True:  # press Ctrl-C to stop image sending program
    # Increment a counter and print it's value to console
    i = i + 1
    print('Sending ' + str(i))

    # Create a simple image
    image = np.zeros((400, 400, 3), dtype='uint8')
    green = (0, 255, 0)
    cv2.rectangle(image, (50, 50), (300, 300), green, 5)

    # Add counter value to the image and send it to the queue
    cv2.putText(image, str(i), (100, 150), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 255, 255), 4)
    sender.send_image(image_window_name, image)
    time.sleep(1)