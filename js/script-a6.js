function shit(arg) {
	console.log($(".progress").width());
}

const onePerBtn = $("#one-per-btn");
const threePerBtn = $("#three-per-btn");
const sevenPerBtn = $("#seven-per-btn");

function plusOne() {
	addPercent(1);
}
function plusThree() {
	addPercent(3);
}
function plusSeven() {
	addPercent(7);
}

function addPercent(arg) {
	let plusPer = $(".progress").width() / 100.0 * arg;
	let currentWidth = $("#best-progress-bar").width();
	let finalWidth = currentWidth + plusPer;
	$("#best-progress-bar").width(finalWidth);
}

function init() {
	$("#best-progress-bar").width("0%");
	onePerBtn.click(plusOne);
	threePerBtn.click(plusThree);
	sevenPerBtn.click(plusSeven);

	console.log("скрипт подгрузился");
}

$(document).ready(init);