const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnright = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");

/* Pondra el elmento despues de empezar el slider */
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

const next = () => {
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(() => {
		slider.style.transition = "none";
		slider.insertAdjacentElement("beforeend", sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	}, 500);
};


const previous = () => {
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast = sliderSection[sliderSection.length - 1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(() => {
		slider.style.transition = "none";
		slider.insertAdjacentElement("afterbegin", sliderSectionLast);
		slider.style.marginLeft = "-100%";
	}, 500);
};

btnright.addEventListener("click", () => {
	next();
});

btnLeft.addEventListener("click", () => {
	previous();
});

// Cambiar imagen del slider cada 5 segundos
setInterval(() => {
	next();
}, 5000);
