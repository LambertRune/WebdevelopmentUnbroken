const setup =()=>{
    let output = document.getElementById("txtOutput");
    let button = document.getElementById("knop");

    button.addEventListener("click",knop);
}

const knop = () =>{
    let output = document.getElementById("txtOutput");
    output.innerHTML = "uitgevoerd";
}
window.addEventListener("load",setup);