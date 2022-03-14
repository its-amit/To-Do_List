//DOM Manipulation
let elem = document.getElementById('click')
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background="yellow";

elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);

tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement)

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold"

tn[0].appendChild(createdElement2, createdElement)

//removeChild(element)
//Query selector
sel = document.querySelectorAll('.container')
console.log(sel);

//Events in Javascript

// function clicked() {
//     console.log('The button was clicked')
// }
// window.onload = function () {
//     console.log('The document was loaded')
// }

// firstContainer.addEventListener('click', function () {
//     console.log("click huaa");
// })

// firstContainer.addEventListener('mouseover', function () {
//     console.log("mouse on container");
// })

// firstContainer.addEventListener('mouseout', function () {
//     console.log("mouse out of container");
// })
// firstContainer.addEventListener('mouseup', function () {
//     console.log("mouse up click on container");
// })
// firstContainer.addEventListener('mousedown', function () {
//     console.log("mouse down click on container");
// })

//Settimeout and Settimeinterval

//Arrow function
// function summ(a,b){
//     return a+b;
// }

summ=(a,b)=>{
    return a+b;
}


// logkaro=()=>{
//     console.log("I am your log")
// }
// clr=setTimeout(logkaro,5000);
// clr=setInterval(logkaro,2000);

//Local storage in javascript
// localStorage.setItem('name','amit')
//localStorage
//localStorage.getItem('name')s
//localStorage.setItem('name','amit')

// obj={name:"amit",length:1,a:{this:"that"}}
// jso=JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed=JSON.parse(`{name:"amit",length:1,a:{this:"that"}}`)
// console.log(parsed)

//Temlate literals-Backticks

