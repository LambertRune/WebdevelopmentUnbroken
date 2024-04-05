const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = "neen";
}

window.addEventListener("load", setup);