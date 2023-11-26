var image = null;
var imgcanva;
var redvalue;

function upload() {
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  imgcanva = document.getElementById("can");
  image.drawTo(imgcanva);
}

function grayscale() {
  if (image == null || ! image.complete()) {
    alert("Upload an image first")
  }
  else {
    for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
      
    redvalue = pixel.getRed();
    }
  image.drawTo(imgcanva);
  }
}

function red() {
  if (image == null || ! image.complete()) {
    alert("Upload an image first")
  }
  else {
    for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(avg * 2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else {
      pixel.setRed(255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(avg * 2 - 255);
      }
    }
  image.drawTo(imgcanva);  
  }
}

function blue() {
  if (image == null || ! image.complete()) {
    alert("Upload an image first")
  }
  else {
    for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(avg * 2);
    }
    else {
      pixel.setRed(avg * 2 - 255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(255);
      }
    }
  image.drawTo(imgcanva);  
  }
}

function green() {
  if (image == null || ! image.complete()) {
    alert("Upload an image first")
  }
  else {
    for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128){
      pixel.setRed(0);
      pixel.setGreen(avg * 2);
      pixel.setBlue(0);
    }
    else {
      pixel.setRed(avg * 2 - 255);
      pixel.setGreen(255);
      pixel.setBlue(avg * 2 - 255);
      }
    }
  image.drawTo(imgcanva);  
  }
}

function magenta() {
  if (image == null || ! image.complete()) {
    alert("Upload an image first")
  }
  else {
    for (var pixel of image.values()) {
      pixel.setGreen(0);
    }
    image.drawTo(imgcanva);
  }
}

function rainbow() {
  if (image == null || ! image.complete()) {
    alert("Upload an image first")
  }
  else {
    var height = image.getHeight();
    for (var pixel of image.values()) {
      var y = pixel.getY();
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      
      if (y < height*(1/7)){
      if  (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      if (avg >= 128){
      pixel.setRed(255);
      pixel.setGreen(2*avg - 255);
      pixel.setBlue(2*avg - 255);
      }
    }
    if (y < height*(2/7) && y >= height*(1/7)){
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
      if (avg >= 128){
      pixel.setRed(255);
      pixel.setGreen(1.2*avg - 51);
      pixel.setBlue(2*avg - 255);
      }
    }
    if (y < height*(3/7) && y >= height*(2/7)){
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      if (avg >= 128){
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2*avg - 255);
      }
    }
    if (y < height*(4/7) && y >= height*(3/7)){
      if (avg < 128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      if (avg >= 128){
      pixel.setRed(2*avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2*avg - 255);
      }
    }
    if (y < height*(5/7) && y >= height*(4/7)){
      if (avg < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      if (avg >= 128){
      pixel.setRed(2*avg - 255);
      pixel.setGreen(2*avg - 255);
      pixel.setBlue(255);
      }
    }
    if (y < height*(6/7) && y >= height*(5/7)){
      if (avg < 128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      if (avg >= 128){
      pixel.setRed(1.2*avg -51);
      pixel.setGreen(2*avg - 255);
      pixel.setBlue(255);
      }
    }
    if (y >= height*(6/7)){
      if (avg < 128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }
      if (avg >= 128){
      pixel.setRed(0.4*avg + 153);
      pixel.setGreen(2*avg - 255);
      pixel.setBlue(0.4*avg + 153);
        }
      }
    }
    image.drawTo(imgcanva);
  }
}

function negative() {
  if (image == null || ! image.complete()) {
    alert("Upload an image first")
  }
  else {
    for (var pixel of image.values()) {
    var newred = 255 - pixel.getRed();
      var newgreen = 255 - pixel.getGreen();
      var newblue = 255 - pixel.getBlue();
    pixel.setRed(newred);
    pixel.setGreen(newgreen);
    pixel.setBlue(newblue);
    }
  image.drawTo(imgcanva);
  }
}

function resetimg() {
  upload();
}

function clearimg() {
  var context = imgcanva.getContext("2d");
  context.clearRect(0, 0, imgcanva.width, imgcanva.height);
}