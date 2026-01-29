let camerapic=document.querySelector("#camerapic");
let herotxtleft=document.querySelector(".herotxt-up");
let herotxtright=document.querySelector(".herotxt-down");
let loremleft=document.querySelector(".lorem-left")
let loremright=document.querySelector(".lorem-right")
let hdtxt=document.querySelector(".hd h1");
let aboutcamleft=document.querySelector(".aboutcam-left h2");
let aboutcamleftp=document.querySelector(".aboutcam-left p");
let aboutcamrightp=document.querySelector(".aboutcam-right p")
let aboutcamright=document.querySelector(".aboutcam-right h2")
let smallimg=document.querySelectorAll(".smallimg img");
let smallimgright=document.querySelectorAll(".smallimg-right img")
let cameratyp=document.querySelectorAll(".page4-img img");
let page4left=document.querySelector(".page4left p");
let page4right=document.querySelector(".page4right");
let page1oval=document.querySelector(".page1-oval");
let page2oval=document.querySelector(".page2-oval");


window.addEventListener("scroll",()=>{
    let scroll=window.scrollY;
    camerapic.style.transform=`translateY(${scroll * 1}px) rotate(-${scroll* 0.05}deg)
    translateX(${scroll *.1}px) rotateY(-${scroll * .01}deg)`

    loremleft.style.transform=`translateX(-${scroll *1}px)`
    loremright.style.transform=`translateX(${scroll *1}px) `
    herotxtleft.style.transform=`translateX(-${scroll *.7}px)`
    herotxtright.style.transform=`translateX(${scroll *.7}px) `
    hdtxt.style.transform=`translateX(${scroll *.4}px)`;
    aboutcamleft.style.transform=`translateX(-${scroll *.2}px)`
    aboutcamleftp.style.transform=`translateX(-${scroll *.17}px)`
    aboutcamrightp.style.transform=`translateX(${scroll *.17}px)`
    aboutcamright.style.transform=`translateX(${scroll *.3}px)`
    page4left.style.transform=`translateX(-${scroll *.3}px)`
    page4right.style.transform=`translateX(${scroll *.3}px)`
    page1oval.style.transform=`translateX(-${scroll * 1}px)`
    page2oval.style.transform=`translateX(-${scroll * .2}px)`

    smallimg.forEach((img)=>{
        img.style.transform=`scale(${scroll * 0.0006}) translateX(-${scroll *.1}px)  `
    })
    smallimgright.forEach((img)=>{
        img.style.transform=`scale(${scroll * 0.0006}) translateX(${scroll *.1}px)  `
    })
    cameratyp.forEach((img)=>{
        img.style.transform=`translateX(-${scroll *.5}px) `
    })

})