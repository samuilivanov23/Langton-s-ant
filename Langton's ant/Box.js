function Box(size){
  this.size = size;
  this.color = '#333333';

  this.show = function(x, y){
    fill(this.color);
    noStroke();
    rect(x,y, this.size, this.size);
  }
}
