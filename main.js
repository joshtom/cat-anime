//Javascript code to animate below
const btns = document.querySelectorAll(".buttons button");
const cat = document.getElementsByClassName("cat")[0];

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", manageCatClasses);
	
}
function manageCatClasses() {
	if (this.getAttribute("data-add")){
		cat.classList.add(this.getAttribute("data-add"));
	}
	if (this.getAttribute("data-remove")){
		cat.classList.remove(this.getAttribute("data-remove"));
	} 
	
}