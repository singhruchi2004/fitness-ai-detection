from flask import * 
import cv2
app = Flask(__name__)

import numpy as np

import pickle
# from sent import sendSms

import os
import cvzone

from cvzone.HandTrackingModule import HandDetector
detector = HandDetector(maxHands=1,detectionCon=0.5)




def generate_frames():
    
    counter =0
    while True:
        
       
        success,img=camera.read()
        hand,img=detector.findHands(img)
        if hand:
            hand1=hand[0] 
            fingers=detector.fingersUp(hand1)
            print(fingers)    
            if fingers == [1,1,0,0,0]:  
                
                print("Message Sent")
                flag=True
                
                        
                # sendSms()
            else:
                pass
    
        ret,buffer=cv2.imencode('.jpg',img)
        img=buffer.tobytes()
        

        yield(b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + img + b'\r\n')









@app.route('/')
def hello_world():
    global camera
    global counter

    camera=cv2.VideoCapture(0)
    
    return render_template('index.html')



@app.route("/autoscan")
def scan():
    
    
    a = request.args.get('a')
    return render_template('scan.html')






@app.route('/video',methods = [ 'GET'])
def video():
    a = request.args.get('a')

    global objecti
    objecti=[]
    
    if a=='1':
        camera.release()
        
            

      
        
        return render_template("detected.html")
    
    if a==None:
        
        return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')
    else:
       
        return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')
        

if __name__ == '__main__':
    
    app.run(debug=True)