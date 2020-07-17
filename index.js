// Finding elements
const shuffleBtn = document.querySelector(".btn-shuffle");
const sortBtn = document.querySelector(".btn-sort");
const boxElements = document.querySelectorAll('.box');

// Debounce method to help in reducing the click event happen continuosly on user clicks
function debounce(fn, delay) {
	var timer;
	var context = this;
	return function() {
		var args = arguments;
		if (timer) {
		clearTimeout(timer);
		}
		timer = setTimeout(function() {
			fn.apply(context, args);
		}, delay);
	}
}

let shuffleDebouncer = debounce(suffleElements, 200);
let sortDebouncer = debounce(sortElements, 200);

// attaching click event handler to the buttons

shuffleBtn.addEventListener('click', shuffleDebouncer);
sortBtn.addEventListener('click', sortDebouncer);

// Object helps in finding unique order for elements
let orderObj = {};

// Getting unique order number
// Returns a value between 1 to length.
let getRandomOrder = (length) => {
    const orderIndex = Math.ceil(Math.random() * length);
    if (!orderObj[orderIndex]) {
        return orderIndex;
    }
    return getRandomOrder(length);    
}

// This method do the shuffling of elements using style order property
function suffleElements() {
    orderObj = {};
    const elementsLength = boxElements.length;
    boxElements.forEach((boxElement) => {
        const order = getRandomOrder(elementsLength);
        orderObj[order] = true;
        boxElement.style.order = order;
    });
}

// Helps in sorting the elements in ascending order
function sortElements() {
    const elementsLength = boxElements.length;
    boxElements.forEach((boxElement, index) => {
        boxElement.style.order = index+1;
    })
}