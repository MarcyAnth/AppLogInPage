const elementring =  document.querySelector("#elementsuite-ring");
const elementletters = document.querySelector("#elementsuite-letters");
const login = document.querySelector("#log-in-block");
const logocontainer = document.querySelector(".logo-container");
const inputbox =  document.querySelector(".input-box")
const submitbox =  document.querySelector('#submit-box')
const codecontainer = document.querySelector("#code-container")
const i1 = document.querySelector("#i1");
const i2 = document.querySelector("#i2");
const i3 = document.querySelector("#i3");
const i4 = document.querySelector("#i4");
const fourthbox =  document.querySelector(".fourth-box");
const strapline = document.querySelector("#strapline-images");
const spinStamp = document.querySelector("#background-stamp");

let loading = true;

setTimeout(function(){
    loading = false;
},2000);

function waitForLoading(){
    if(!loading) {
        elementring.classList.remove("animation-spin");
        elementring.classList.add("animation-zoom");
        elementletters.classList.add("fade-away");
        setTimeout(function(){
            elementring.style.display = "none";
            codecontainer.style.display = "block";
            logocontainer.style.display = "none";
        },750)
        return 
    }
    setTimeout(waitForLoading, 1000)
}



waitForLoading()

fourthbox.addEventListener("keyup",function() {
    if((i1.maxLength === i1.value.length) && (i2.maxLength === i2.value.length) && (i3.maxLength === i3.value.length) && (i4.maxLength === i4.value.length)) {
        submitbox.classList.add("glow")
        submitbox.classList.remove("greyed-out")
    }
  })

  function movetoNext(current, nextFieldID) {  
    if (current.value.length >= current.maxLength) {  
    document.getElementById(nextFieldID).focus();  
    }  
}  

//   images = ["assets/modules/Icon - Engage - white.png","assets/modules/Icon - HR - white.png","assets/modules/Icon - Learn - white.png","assets/modules/Icon - Pay - white.png","assets/modules/Icon - Perform - white.png","assets/modules/Icon - Recruit - white.png","assets/modules/Icon - Time - white.png","assets/modules/Icon - Work - white.png"];
//   const number_of_logos = 8;
//   const spacing = (window.innerWidth / number_of_logos)*12;
//   const duration = (number_of_logos*spacing);
//   var int_cnt = -1;
//   var marquee = document.getElementById("hold_logos");
//   partner_interval = setInterval(function() {
//     console.log(window.innerWidth)
//       int_cnt++;
//       if(int_cnt < number_of_logos) {
//              const img = document.createElement("img");
//              img.className = "logo";
//              img.src = images[int_cnt];
//              marquee.append(img);
//       }
//   }, spacing/1.5);
  
//   setTimeout(function() {
//       clearInterval(partner_interval);
//   }, duration);


