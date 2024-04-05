const setup = () =>{
    let slider = document.getElementsByClassName("slider");
    let button = document.getElementById("button");
    let removeButton = document.getElementsByTagName("button");

    button.addEventListener("click", addcolor);

    slider[0].addEventListener("input", functie);
    slider[0].addEventListener("change",functie)
    slider[1].addEventListener("input", functie);
    slider[1].addEventListener("change",functie)
    slider[2].addEventListener("input", functie);
    slider[2].addEventListener("change",functie)
    functie();


}
const functie = () =>{
    let slider = document.getElementsByClassName("slider");
    let box = document.getElementsByClassName("box");
    let text = document.getElementsByClassName("text");
    
    
    let slider0 = slider[0].value;
    let slider1 = slider[1].value;
    let slider2 = slider[2].value;
    
    text[0].innerHTML = "255 Red: "+slider0;
    text[1].innerHTML = "255 Green: "+slider1;
    text[2].innerHTML = "255 Blue: "+slider2;

    box[0].style.backgroundColor = "rgb("+slider0+","+slider1+","+slider2+")";
    
}

const addcolor = () =>{

    let item = document.getElementsByClassName ("items")[0];
    let slider = document.getElementsByClassName("slider");
    const colorBox = document.createElement("div");
    const button = document.createElement("button");
    let slider0 = slider[0].value;
    let slider1 = slider[1].value;
    let slider2 = slider[2].value;

    colorBox.style.backgroundColor = "rgb("+slider0+","+slider1+","+slider2+")";
    button.style.float="right";
    button.innerHTML="X";
    button.name="remove";
   
    
    item.appendChild(colorBox);
    colorBox.appendChild(button)



}

const remove=()=>{
    let button = document.get
}
window.addEventListener("load",setup);