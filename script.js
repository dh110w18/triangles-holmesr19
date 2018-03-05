//Part 1: area of a triangle
var base = 30;
var height = 40;
var formula = .5 * base * height;
var Part1out = "The area of a triangle of this base and height is " + formula;
document.getElementById("first").innerHTML = Part1out;

//Part 2: Hypotenuse of a triangle
function calcHypotenuse(b, h){
   return Math.sqrt(Math.pow(b,2) + Math.pow(h, 2));
}

var hypotenuse = calcHypotenuse(base, height);
var Part2out = "The hypotenuse of a triangle of this base and height is " + hypotenuse;
document.getElementById("second").innerHTML = Part2out;


//Part 3: Triangle Object
var triangle = {base: 30, 
                height: 40, 
                canvasId: "canvas",
                calchypotenuse: function(){
                  return calcHypotenuse(this.base, this.height)
                },
                calcarea: function(){
                  return ((1/2) * this.base * this.height)
                },
                drawIt: function(){
                  drawTriangle(this.base, this.height, this.canvasId);
                }
                };

//console.log(triangle.calchypotenuse());


var part3message1 = "The area of a triangle with base " + triangle.base + 
    " and a height of " + triangle.height + " is " + triangle.calcarea() + ". ";

var part3message2 = "The length of the hypotenuse of a triangle with base " + triangle.base + 
    " and a height of " + triangle.height + " is " + triangle.calchypotenuse();

document.getElementById("third").innerHTML = part3message1 + "<br>" + part3message2;
triangle.drawIt();


//Part 4: User entered base and height

var userbase;
var userheight;
var part4msg1;
function assignUserbase(){
  userbase = prompt("Please enter a base size " + 
                      "that is equal to or greater than 10: ");
  userbase = Number(userbase);
}

function assignUserheight(){
  userheight = prompt("Please enter a height " + 
                      "that is equal to or greater than 0: ");
  userbase = Number(userheight);
}

assignUserbase();

//alerts not working, how to loop until both are satisfactory
if (userbase < 10){
  alert(userbase + "< 10!!")
  assignUserbase();
} else if (userbase >= 10){
  assignUserheight();
  if (userheight < 0){
    alert(userheight + "<= 0!!")
    assignUserheight();
    }
  else if (userheight > 0){
    triangle.base = userbase;
    triangle.height = userheight;
    part4msg1 = "The area of a triangle with height "  + triangle.height + 
      " and base " + triangle.base + " is " + triangle.calcarea();
    part4msg2 = "The hypotenuse is of a triangle with height "  + triangle.height +
      " and base " + triangle.base + " is " + triangle.calchypotenuse();
  }
}

document.getElementById("fourth").innerHTML = part4msg1 + "<br>" + part4msg2;
triangle.canvasId = "canvas2";
triangle.drawIt();

//Part 5: lots of triangles

document.getElementById("fifth").innerHTML = "Growing Triangles"
for (i = 1; i <= 5; i++){
  triangle.base = 30 * i;
  triangle.height = 20 * i;
  triangle.canvasId = "canvas3";
  triangle.drawIt();
}