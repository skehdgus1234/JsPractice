
const body = document.body;
const normalWidth = window.innerWidth;
const biggerWidth = Math.floor(normalWidth * 1.2);
const smallerWidth = Math.floor(normalWidth * 0.9);
console.log(normalWidth);

function backgroundChange(){
    const currentWidth = window.innerWidth;

    if(currentWidth > biggerWidth){
        body.className = "bigger";
        console.log(body);
    }
    else if(currentWidth < smallerWidth){
        body.className = "smaller";
        console.log(body);
    }
    else{
        body.className = "normal";
        console.log(body);
    }

}

window.addEventListener("resize", backgroundChange)
 
 


