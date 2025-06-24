import cv2
import time
from sent import sendSms
from cvzone.HandTrackingModule import HandDetector
detector = HandDetector(maxHands=1,detectionCon=0.5)

# cap=cv2.VideoCapture('http://192.168.195.106:8080/video')
cap=cv2.VideoCapture(0)
cap.set(3,640)
cap.set(4,480)
k=0
flag=False
while True:
    
    success,img=cap.read()
    hand,img=detector.findHands(img)
    if hand:
      hand1=hand[0] 
      fingers=detector.fingersUp(hand1)
      print(fingers)    
      if fingers == [1,1,0,0,0]:  
        k=k+1
        if flag!=True:  
            if k==100:
                print("Message Sent")
                flag=True
                k=0
                # sendSms()



                      
    cv2.imshow("Success",img)
    cv2.waitKey(1)