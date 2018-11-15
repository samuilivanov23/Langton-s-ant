//if you clock on the grid you will spawn antother ant with the same pattern
let backGroundColor = 51;
let ants = [];
let numberOfAnts = 1;
const numOfWidthBoxes = 750;
const numOfHeightBoxes = 450;
const boxSize = 2;
const canvasWidth = 1500;
const canvasHeight = 900;
let boxes = [];
let startBoxXIndex;
let startBoxYIndex;
let currentAntIndex;
let directions = [0, 1, 2, 3]; // 0 -> up, 1 -> right, 2 -> down, 3 -> left

function setup(){
  createCanvas(canvasWidth, canvasHeight);
  background(backGroundColor);
  drawGrid();
  //for multiple ants
  for(let i = 0; i < numberOfAnts; i++){
    startBoxXIndex = int(random(150, 550)); // random width position
    startBoxYIndex = int(random(100, 300)); // random height position
    ants[i] = new Ant(startBoxXIndex, startBoxYIndex);
    ants[i].currentBox = boxes[startBoxXIndex][startBoxYIndex];
    let antDir = directions[int(random(4))];
    ants[i].direction = antDir;
  }
  currentAntIndex = numberOfAnts - 1;
}

function draw(){
  //triangular langton's ant pattern
  for(let i = 0; i < 1; i++){
  for(let i = 0; i < numberOfAnts; i++){
      //checkBorder(ants[i]);
      /*if(ants[i].currentBox.color == '#333333'){
        ants[i].currentBox.color = '#FF0000';
        ants[i].moveRight();
      }
      else if (ants[i].currentBox.color == '#FF0000'){
        ants[i].currentBox.color = '#5AFF5A';
        ants[i].moveRight();
      }
      else if (ants[i].currentBox.color == '#5AFF5A'){
        ants[i].currentBox.color = '#00BFFF';
        ants[i].moveLeft();
      }
      else if (ants[i].currentBox.color == '#00BFFF'){
        ants[i].currentBox.color = '#FFFF00';
        ants[i].moveLeft();
      }
      else if (ants[i].currentBox.color == '#FFFF00'){
        ants[i].currentBox.color = '#FF69B4';
        ants[i].moveLeft();
      }
      else if (ants[i].currentBox.color == '#FF69B4'){
        ants[i].currentBox.color = '#696969';
        ants[i].moveRight();
      }
      else if (ants[i].currentBox.color == '#696969'){
        ants[i].currentBox.color = '#800000';
        ants[i].moveLeft();
      }
      else if (ants[i].currentBox.color == '#800000'){
        ants[i].currentBox.color = '#00FF00';
        ants[i].moveLeft();
      }
      else if (ants[i].currentBox.color == '#00FF00'){
        ants[i].currentBox.color = '#0000FF';
        ants[i].moveLeft();
      }
      else if (ants[i].currentBox.color == '#0000FF'){
        ants[i].currentBox.color = '#808000';
        ants[i].moveRight();
      }
      else if (ants[i].currentBox.color == '#808000'){
        ants[i].currentBox.color = '#966496';
        ants[i].moveRight();
      }
      else if (ants[i].currentBox.color == '#966496'){
        ants[i].currentBox.color = '#333333';
        ants[i].moveRight();
      }*/

      //symetric langton's ant pattern
      /*if(ants[i].currentBox.color == '#333333'){
        ants[i].currentBox.color = '#FFFFFF';
        ants[i].moveLeft();
      }
      else if(ants[i].currentBox.color == '#FFFFFF'){
      ants[i].currentBox.color = '#FF3232';
        ants[i].moveLeft();
      }
      else if(ants[i].currentBox.color == '#FF3232'){
        ants[i].currentBox.color = '#6464FF';
        ants[i].moveRight();
      }
      else if(ants[i].currentBox.color == '#6464FF'){
        ants[i].currentBox.color = '#333333';
        ants[i].moveRight();
      }*/

      //basic langton's ant pattern
      if(ants[i].currentBox.color == '#333333'){
        ants[i].currentBox.color = '#FFFFFF';
        ants[i].moveRight();
      }
      else if(ants[i].currentBox.color == '#FFFFFF'){
        ants[i].currentBox.color = '#333333';
        ants[i].moveLeft();
      }

      //artistic langton's ant pattern
      /*if((ants[i].currentBoxXIndex > 0 && ants[i].currentBoxXIndex < numOfWidthBoxes - 1) && (ants[i].currentBoxYIndex > 0 && ants[i].currentBoxYIndex < numOfHeightBoxes - 1)) //check if the ant is inside the grid
      {
        if(ants[i].currentBox.color == '#333333'){
          ants[i].currentBox.color = '#FF0000';
          ants[i].moveRight();
        }
        else if (ants[i].currentBox.color == '#FF0000'){
          ants[i].currentBox.color = '#5AFF5A';
          ants[i].moveLeft();
        }
        else if (ants[i].currentBox.color == '#5AFF5A'){
          ants[i].currentBox.color = '#00BFFF';
          ants[i].moveRight();
        }
        else if (ants[i].currentBox.color == '#00BFFF'){
          ants[i].currentBox.color = '#FFFF00';
          ants[i].moveRight();
        }
        else if (ants[i].currentBox.color == '#FFFF00'){
          ants[i].currentBox.color = '#FF69B4';
          ants[i].moveRight();
        }
        else if (ants[i].currentBox.color == '#FF69B4'){
          ants[i].currentBox.color = '#696969';
          ants[i].moveRight();
        }
        else if (ants[i].currentBox.color == '#696969'){
          ants[i].currentBox.color = '#800000';
          ants[i].moveLeft();
        }
        else if (ants[i].currentBox.color == '#800000'){
          ants[i].currentBox.color = '#00FF00';
          ants[i].moveLeft();
        }
        else if (ants[i].currentBox.color == '#00FF00'){
          ants[i].currentBox.color = '#0000FF';
          ants[i].moveLeft();
        }
        else if (ants[i].currentBox.color == '#0000FF'){
          ants[i].currentBox.color = '#808000';
          ants[i].moveRight();
        }
        else if (ants[i].currentBox.color == '#808000'){
          ants[i].currentBox.color = '#333333';
          ants[i].moveRight();
        }
      }*/
    }
  }
  refreshGrid();
}

function drawGrid(){
  for(let i = 0; i < numOfWidthBoxes; i += 1){
    boxes[i] = [];
    for(let j = 0; j < numOfHeightBoxes; j += 1){
      boxes[i][j] = new Box(boxSize);
      boxes[i][j].show(boxSize * i, boxSize * j);
    }
  }
}

function refreshGrid(){
  for(let i = 0; i < numberOfAnts; i++){
    ants[i].currentBox.show(ants[i].currentBoxXIndex * boxSize, ants[i].currentBoxYIndex * boxSize);
  }
}

function mouseClicked(){
    createNewAnt(int(mouseX / 2), int(mouseY / 2));
}

function checkBorder(ant){
  if(ant.currentBoxXIndex < 0){
    ant.currentBoxXIndex = numOfWidthBoxes - 1;
  }
  else if(ant.currentBoxXIndex > numOfWidthBoxes - 1){
    ant.currentBoxXIndex = 1;
  }
  else if(ant.currentBoxYIndex < 0){
    ant.currentBoxYIndex = numOfHeightBoxes - 1;
  }
  else if(ant.currentBoxYIndex > numOfHeightBoxes - 1){
    ant.currentBoxYIndex = 1;
  }
}

function createNewAnt(x, y){
  currentAntIndex++;
  ants[currentAntIndex] = new Ant(x, y);
  ants[currentAntIndex].currentBox = boxes[x][y];
  let antDir = directions[int(random(4))];
  ants[currentAntIndex].direction = antDir;
  numberOfAnts++;
}
