
var image1;
var image2;


function upload()
{
  var can=document.getElementById("can1");
  var file=document.getElementById("file");
   image1=new SimpleImage(file);
  image1.drawTo(can);
  
}
function upload2(){
  var can=document.getElementById("can2");
  var file=document.getElementById("file2");
  image2=new SimpleImage(file);
  image2.drawTo(can);
  
}

function change()
{
  var output=document.getElementById("can3");
  var image3=new SimpleImage(image1.getWidth(),image1.getHeight());
  for(var pixel of image1.values())
    {
      
      
      var x=pixel.getX();
      var y=pixel.getY();
      if(pixel.getGreen()>=220)
       image3.setPixel(x,y,image2.getPixel(x,y));
      else
        image3.setPixel(x,y,image1.getPixel(x,y));
    }
  image3.drawTo(output);
  
  
}

function gray(){
  var can=document.getElementById("can1");
  for(var pixel of image1.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
      
    }
  image1.drawTo(can);
}

function rainbow(){
  var can=document.getElementById("can1");
  for(var pixel of image1.values())
    {
      if(pixel.getX()<(image1.getWidth()/7))
        pixel.setRed(255);
      else if (pixel.getX()<2*(image1.getWidth()/7))
        pixel.setGreen(255);
      else if(pixel.getX()<3*(image1.getWidth()/7))
        pixel.setBlue(255);
        
      
    }
  image1.drawTo(can);
  
}