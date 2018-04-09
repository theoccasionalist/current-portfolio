const navButton1 = document.querySelector('#navButton1');
const navButton2 = document.querySelector('#navButton2');
const navButton3 = document.querySelector('#navButton3');
const navButton4 = document.querySelector('#navButton4');

navButton1.addEventListener('mouseenter', function() {
	navButton1.style.left = "-60px";
	navButton1.style.cursor = "pointer";
})

navButton1.addEventListener('mouseleave', function() {
	navButton1.style.left = "-210px";
})

navButton2.addEventListener('mouseenter', function() {
	navButton2.style.left = "-60px";
	navButton2.style.cursor = "pointer";
})

navButton2.addEventListener('mouseleave', function() {
	navButton2.style.left = "-210px";
})

navButton3.addEventListener('mouseenter', function() {
	navButton3.style.left = "-60px";
	navButton3.style.cursor = "pointer";
})

navButton3.addEventListener('mouseleave', function() {
	navButton3.style.left = "-210px";
})

navButton4.addEventListener('mouseenter', function() {
	navButton4.style.left = "-60px";
	navButton4.style.cursor = "pointer";
})

navButton4.addEventListener('mouseleave', function() {
	navButton4.style.left = "-210px";
})


//Modal Listeners 1

const modal = document.querySelector(".modal");
const pantryButton = document.querySelector("#pantry-button");
const storeButton = document.querySelector("#store-button");
const reviewsButton = document.querySelector('#reviews-button');
const virtualPetButton = document.querySelector("#virtual-pet-button");
const pantryContent = document.querySelector("#pantry-content");
const storeContent = document.querySelector("#store-content");
const reviewsContent = document.querySelector("#reviews-content");
const virtualPetContent = document.querySelector("#virtual-pet-content");

function projectButtonsPush() {
	
	modal.style.visibility = "visible";
	modal.style.transition= "all 3s 0s";
	modal.style.transform = "translateX(-1450px)";
	closeButton.style.visibility = "visible";
	closeButton.style.transition= "all 2s 0s";
	closeButton.style.transform = "translateY(350px)";
	pantryButton.style.visibility = "hidden";
	storeButton.style.visibility = "hidden";
	reviewsButton.style.visibility = "hidden";
	virtualPetButton.style.visibility = "hidden";
}

pantryButton.addEventListener('click', function() { 
	pantryContent.style.visibility = "visible";
	projectButtonsPush();
})

storeButton.addEventListener('click', function() {
	storeContent.style.visibility = "visible";
	projectButtonsPush();
})

reviewsButton.addEventListener('click', function() {
	reviewsContent.style.visibility = "visible";
	projectButtonsPush();
})

virtualPetButton.addEventListener('click', function() {
	virtualPetContent.style.visibility = "visible";
	projectButtonsPush();
})

const closeButton = document.querySelector("#close-button");
closeButton.addEventListener('click', function() {
	modal.style.transition= "all 2s 0s";
	modal.style.transform = "translateX(1450px)";
	modal.style.visibility = "hidden";
	closeButton.style.transition= "all 1s 0s";
	closeButton.style.transform = "translateY(-350px)";
	closeButton.style.visibility = "hidden";
	pantryButton.style.visibility = "visible";
	storeButton.style.visibility = "visible";
	reviewsButton.style.visibility = "visible";
	virtualPetButton.style.visibility = "visible";
	pantryContent.style.visibility = "hidden";
	storeContent.style.visibility = "hidden";
	reviewsContent.style.visibility = "hidden";
	virtualPetContent.style.visibility = "hidden";
})

const gitHubLogo = document.querySelector("#github");

/*const closeButton = document.querySelector(".modal button");

closeButton.addEventListener('click', function() { 
	modal.style.visibility = "hidden";
})*/

/*pantryContent.addEventListener("mouseleave", toggleModal);*/



