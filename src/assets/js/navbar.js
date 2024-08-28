

  
const btn = document.querySelector(".menu__button");
const menu = document.querySelector(".menu__list");
const items = document.querySelectorAll(".menu__item");


window.addEventListener('click', function(e){
    if(e.target == flex){
        modal.style.display = 'none';
    }
});

const toggle = () => {
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
		btn.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
	} else {
		menu.classList.add("active");
		btn.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
	}
};

btn.addEventListener("click", toggle);

function toggleSub() {
	if (this.classList.contains("submenu-active")) {
		this.classList.remove("submenu-active");
	} else if (menu.querySelector(".submenu-active")) {
		menu.querySelector(".submenu-active").classList.remove("submenu-active");
		this.classList.add("submenu-active");
	} else {
		this.classList.add("submenu-active");
	}
}

for (let item of items) {
	if (item.querySelector(".menu__submenu")) {
		item.addEventListener("click", toggleSub, false);
	}
	item.addEventListener("keypress", toggleSub, false);
}

let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

