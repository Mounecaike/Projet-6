// tableau avec les images 
let slide1 = document.getElementById("Slide1")
let slide2 = document.getElementById("Slide2")
let slide3 = document.getElementById("Slide3")
let slide4 = document.getElementById("Slide4")

const slides = [
	{
		image: slide1,
		caption: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: slide2,
		caption: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: slide3,
		caption: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: slide4,
		caption: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let ArrowRight = document.querySelector(".arrow_right")
//console.log(ArrowRight)

let ArrowLeft = document.querySelector(".arrow_left")
//console.log(ArrowLeft)

let BulletPoint = document.querySelectorAll(".dot")
console.log(BulletPoint)

let slider = document.getElementById("Slider")

let NumbersSlide = slides.length

let Indexslider = 0 


ArrowLeft.addEventListener('click', () => {
	PreviousSlides()
	console.log("flechegauche")
})

ArrowRight.addEventListener('click', () =>{
	NextSlides()
})

function NextSlides (){
	Indexslider++
	if (Indexslider >= NumbersSlide) {
		Indexslider = 0;
	}
	AfficherImages()
}

function PreviousSlides (){
	Indexslider--
	if (Indexslider < 0) {
		Indexslider = NumbersSlide - 1;
	}
	AfficherImages()
}

function AfficherImages (){
	for (let i = 0; i < NumbersSlide; i++ ){
		slides[i].image.classList.remove("active")
		BulletPoint[i].classList.remove("active")
	}
	slides[Indexslider].image.classList.add("active")
	BulletPoint[Indexslider].classList.add("active")
	let captionElement = document.getElementById("caption");
    captionElement.innerHTML = slides[Indexslider].caption;
}
AfficherImages()
