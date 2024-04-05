const setup = () => {
	let sliders = document.getElementsByClassName("slider");


	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input",update);

	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input",update);
	update()
	
	
	
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemo=document.getElementsByClassName("colorDemo");
	let text = document.getElementsByClassName("text");
	

	
	let value= sliders[0].value;
	let value1=sliders[1].value;
	let value2=sliders[2].value;
	
	
   
	colorDemo[0].style.backgroundColor= "rgb("+value+","+value1+","+value2+")";
	

}


window.addEventListener("load", setup);