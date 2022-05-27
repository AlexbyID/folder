
function scrollNachalo() {
  if(history.scrollRestoration)
    history.scrollRestoration === 'manual';
}
window.addEventListener("beforeunload", scrollNachalo);


let scrWidth = window.screen.width;
let delVd = document.querySelector(".header-left");
let vidjet = document.querySelector(".header-inner");
let fxpos, icVidjet;

if(scrWidth<1570){
  vidjet.removeChild(delVd);
  var vd = document.createElement("div");
  var vd_2 = document.createElement("div");
  var vd_3 = document.createElement("div");
  vidjet.prepend(vd);
  vd.classList.add("vidjet-left-screen");
  vd.prepend(vd_2);
  vd_2.classList.add("vidjet-white-back");
  var ic = document.createElement("i");
  vd.prepend(vd_3);
  vd_3.classList.add("fix-pos-ic-vidjet");
  vd_3.prepend(ic);
  ic.classList.add("ic-vidjet");
  fxpos = document.querySelector(".fix-pos-ic-vidjet");
  fxpos.style = "width: inherit; height: 137px; display: flex; justify-content: center; align-items: center;background-color: #fff;";
}
if(scrWidth<1165)
  fxpos.style.backgroundColor = "#F5F5FB";

if(scrWidth<800){
  fxpos.style.cssText = "";
  icVidjet = document.querySelector(".ic-vidjet");
  icVidjet.style = "width: 40px; height: 40px;";
}

if(scrWidth<348)
  icVidjet.style.cssText = "width: 30px; height: 30px;";
