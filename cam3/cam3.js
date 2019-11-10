'use strict';
       const video= document.getElementById('video');
       const canvas= document.getElementById('canvas');
       const snap= document.getElementById('snap');
       const errorMsgElement = document.getElementById('span#ErrorMsg');
       const constraints={
           audio: false,
           video:{
               width:500, height:400
            }
       };
       async function init(){
           try{
               const stream= await navigator.mediaDevices.getUserMedia(constraints);
               handleSuccess(stream);
           }
           catch(e){
               errorMsgElement.innerHTML=`navigator.getUserMedia.error:${e.toString()}`;
           }
       }
       function handleSuccess(stream){
           window.stream = stream;
           video.srcObject = stream;
       }
       init();
       var context= canvas.getContext('2d');
       snap.addEventListener("click",function(){
           context.drawImage(video,0,0,400,300);

    });
