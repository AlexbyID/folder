// window.addEventListener("load", function () {
//   alert("привет броо!");
// });
// 1-е


// let name = prompt("как тебя зовут");
// let q_2 = document.querySelector(".q_2");
// q_2.onclick = () => { alert("привет " + name); }
// 2-е


// function minArr(a,b) {
//   if(a>b) return b;
//   else return a;
// }
// console.log(minArr(100,5));
// 3-е

// var mas = [];
// var allinp = document.querySelectorAll("input");
// var frm = document.querySelector(".fakeform");
// for(var i=0; i<allinp.length; i++){
//   mas.push(allinp[i]);
//   if(mas[i].type=="button") mas.splice(i,1);
// }
// frm.onclick =()=>{
//   for(var i=0; i<mas.length; i++)
//     if(mas[i].value=="") mas[i].value=0;
//   if(mas[0].value==0 && i==0) alert("чеЛ, эт не ур-е");
//   else{
//     var dD = mas[1].value*mas[1].value-4*mas[0].value*mas[2].value;
//     if(dD<0) alert("0 корней");
//     else if(dD>0){
//         var x = ((-mas[1].value+(Math.sqrt(dD)))/(2*mas[0].value));
//         var x1 = ((-mas[1].value-(Math.sqrt(dD)))/(2*mas[0].value));
//         alert("Первый корень: "+x); alert("Второй корень: "+x1)
//     }else{ var x = -mas[1].value/2*mas[0].value; alert("Единственный корень: "+x); }
//   }
// }
//4-е + 5-е
