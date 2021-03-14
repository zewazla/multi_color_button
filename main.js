window.onload = function () {
  Left();
}

//task 1


function Right() {
  document.querySelector("#flip-flop-go-right").style.visibility = 'hidden';
  document.querySelector("#flip-flop-go-left").style.visibility = 'visible';
}

function Left() {
  document.querySelector("#flip-flop-go-right").style.visibility = 'visible';
  document.querySelector("#flip-flop-go-left").style.visibility = 'hidden';
}

//task 2

const box = document.querySelector("#change-color");

// first solution
// const colors = ['white', 'red', 'blue', 'pink', 'green'];
// let currentColorIndex = 0;

// function changeButtonColor() {
//   currentColorIndex++;
//   if (currentColorIndex>=colors.length){
//     currentColorIndex = 0;
//   }
//   box.style.backgroundColor = colors[currentColorIndex];
// }

// second solution
function changeButtonColor() {
  if (box.style.backgroundColor == 'white') {
    box.style.backgroundColor = 'red';
  }

  else {
    box.style.backgroundColor = 'white';
  }
}


//task 3
function changebackColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector("#neighbour").style.backgroundColor = "#" + randomColor;
}

//task 4
let clicks = 0;
function Count() {
  clicks += 1;
  document.querySelector("#count").innerHTML = clicks;
}