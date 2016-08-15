// Helpers Functions


// Screen
function Screen(with, height) {
  this.canvas = document.createElement("canvas");
  this.canvas.width = this.width = width;
  this.canvas.height = this.height = height;
  this.ctx = this.canvas.getContext("2d");

  document.body.appendChild(this.canvas);
};

Screen.prototype.drawSprite = function (sp, x, y) {
};


//Sprite
function Sprite(img, x, y, w, h) {

};


// Input
function InputHandeler() {};

InputHandeler.prototype.isDown = function (code) {

};

InputHandeler.prototype.isPressed = function (code) {

};
