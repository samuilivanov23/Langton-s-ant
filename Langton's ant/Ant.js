function Ant(startX, startY){
  this.currentBoxXIndex = startX;
  this.currentBoxYIndex = startY;
  this.direction;
  this.currentBox = new Box(4); // 4 is the boxSize

  this.moveLeft = function(){
    if(this.direction == 0){
      this.currentBoxXIndex -= 1;
      checkBorder(this);
      this.currentBox = boxes[this.currentBoxXIndex][this.currentBoxYIndex];
      this.direction = 3;
    }
    else if(this.direction == 2){
      this.currentBoxXIndex += 1;
      checkBorder(this);
      this.currentBox = boxes[this.currentBoxXIndex][this.currentBoxYIndex];
      this.direction = 1;
    }
    else if(this.direction == 3){
      this.currentBoxYIndex += 1;
      checkBorder(this);
      this.currentBox = boxes[this.currentBoxXIndex][this.currentBoxYIndex];
      this.direction = 2;
    }
    else if(this.direction == 1){
      this.currentBoxYIndex -= 1;
      checkBorder(this);
      this.currentBox = boxes[this.currentBoxXIndex][this.currentBoxYIndex];
      this.direction = 0;
    }
  }

  this.moveRight = function(){
    if(this.direction == 0){
      this.currentBoxXIndex += 1;
      checkBorder(this);
      this.currentBox = boxes[this.currentBoxXIndex][this.currentBoxYIndex]; //if that doesm't work change it to newBoxXIndex and newBoxYIndex
      this.direction = 1;
    }
    else if(this.direction == 2){
      this.currentBoxXIndex -= 1;
      checkBorder(this);
      this.currentBox = boxes[this.currentBoxXIndex][this.currentBoxYIndex];
      this.direction = 3;
    }
    else if(this.direction == 3){
      this.currentBoxYIndex -= 1;
      checkBorder(this);
      this.currentBox = boxes[this.currentBoxXIndex][this.currentBoxYIndex];
      this.direction = 0;
    }
    else if(this.direction == 1){
      this.currentBoxYIndex += 1;
      checkBorder(this);
      this.currentBox = boxes[this.currentBoxXIndex][this.currentBoxYIndex];
      this.direction = 2;
    }
  }
}
