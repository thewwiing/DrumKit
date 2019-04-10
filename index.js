var btns = document.querySelectorAll(".drum");
var sounds=["tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"];
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
      makeSound(this.innerHTML);
      buttonAni(this.innerHTML);

    });
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAni(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
      var t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;
    case "a":
      var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;
    case "s":
      var t3 = new Audio("sounds/tom-3.mp3");
      t3.play();
      break;
    case "d":
      var t4 = new Audio("sounds/tom-4.mp3");
      t4.play();
      break;
    case "j":
      var sn = new Audio("sounds/snare.mp3");
      sn.play();
      break;
    case "k":
      var cr = new Audio("sounds/crash.mp3");
      cr.play();
      break;
    case "l":
      var k = new Audio("sounds/kick-bass.mp3");
      k.play();
      break;


    default:console.log(this.innerHTML);
  }
}
function buttonAni(key){
  var activeBtn = document.querySelector("."+key);
  activeBtn.classList.add("pressed");
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },100);
}

// this.style.color="white";
