const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides)

let ArrowRight = document.querySelector(".arrow_right")
//console.log(ArrowRight)

let ArrowLeft = document.querySelector(".arrow_left")
//console.log(ArrowLeft)

let BulletPoint = document.querySelector(".dots")
console.log(BulletPoint)

let slider = document.getElementById("Slider")
console.log(slider)

let slidergroup = slider.getElementsByClassName("imgslide")

let NumbersSlide = slidergroup.length
console.log(NumbersSlide)

let Indexslider = 0 


ArrowLeft.addEventListener('click', () => {
	PreviousSlides()
	console.log("flechegauche")
})

ArrowRight.addEventListener('click', () =>{
	NextSlides()
	console.log("flechedroite")
})

function NextSlides (){
	Indexslider++
	if (Indexslider >= NumbersSlide) {
		Indexslider = 0;
	}
	AfficherImages(Indexslider)
	console.log("coucou")
}

function PreviousSlides (){
	console.log("diapo précedente")
}

function AfficherImages (){
	let Imgslider = document.querySelector(".imgslider");
	for (let i = 0; i < NumbersSlide; i++ ){
		Imgslider[i].classList.remove("active")
	}
	Imgslider[Indexslider].classList.add("active")
}
