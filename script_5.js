
let screenHeight = window.screen.height;
let screenWidth = window.screen.width;
let root = document.querySelector("html");
var get = document.querySelector(".main-sticky-frame-padding");
console.log(get.clientHeight);
function scrollEvent(elem) {
  var delta = elem.deltaY;
  if(delta>0){
    console.log("1");
    get.scrollTo(50,50);
  }
}
root.addEventListener("wheel", scrollEvent);


function scrollNachalo() {
  if(history.scrollRestoration)
    history.scrollRestoration === 'manual';
}
window.addEventListener("beforeunload", scrollNachalo);
