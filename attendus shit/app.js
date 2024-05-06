let inp = document.getElementById("inp")
let para = document.getElementById("mypara")


let now = new Date().getTime()
console.log(now);


let date = new Date();

// Phir ismein hum set karenge ki humein sirf hour, minute, aur second kis hisaab se chaiye
date.setHours(8);  // 8 ghante
date.setMinutes(30);  // 30 minute
date.setSeconds(0);  // 0 second
date.setMilliseconds(0);  // 0 milliseconds

// Ab hum is date ka time milliseconds mein leenge
let milliseconds = date.getTime();

console.log("Milliseconds:", milliseconds);



let date2 = new Date();

// Phir ismein hum set karenge ki humein sirf hour, minute, aur second kis hisaab se chaiye
date2.setHours(8);  // 8 ghante
date2.setMinutes(40);  // 30 minute
date2.setSeconds(0);  // 0 second
date2.setMilliseconds(0);  // 0 milliseconds

// Ab hum is date ka time milliseconds mein leenge
let milliseconds2 = date2.getTime();

// console.log("Milliseconds:", milliseconds2);


function btn() {
let now_date = new Date()
let date1 = now_date.toLocaleTimeString()

    let new_inp = inp.value



    if (now < milliseconds) {
         para.innerHTML = `enter  ${new_inp}  ${date1}` + '<br>';

    }else if (now < milliseconds2) {
       para.innerHTML  =  `khara hu jyo  ${new_inp}  ${ date1}` + '<br>';


    }else if (now > milliseconds2) {
       para.innerHTML  += `ghar jyo  ${new_inp}  ${ date1}` + '<br>';
    }
}