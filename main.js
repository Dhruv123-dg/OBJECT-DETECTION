var dog_cat= ""
status= ""

objects=[]

function preload(){

    dog_cat= loadImage("dog_cat.jpg")

}

function setup(){
     
    canvas= createCanvas(640,420)
    canvas.center()
    objectDetector= ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="status= detecting objects"
}

function modelLoaded(){

    console.log("model is loaded!!!")
    status= true
    objectDetector.detect(dog_cat,gotResult)
}

function gotResult(error,results){
    
    if(error){

        console.log(error)
    }else{

        console.log(results)
        objects= results


    }

}

function draw(){

    image(dog_cat,0,0,640,420)
   

    if(status != ""){

        for(i=0;i<objects.length;i++){

            document.getElementById("status").innerHTML = "Status = Object Detected"
            fill("#ff0000")
            percent= floor(objects[i].confidence*100)
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
            noFill()
            stroke("#ff0000")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        
        }
    }
    

}