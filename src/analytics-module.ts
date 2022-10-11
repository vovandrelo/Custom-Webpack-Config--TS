
// Данный модуль отвечает за аналитику - подсчитывает количество кликов по документу:
let numClicks: number = 0;
window.addEventListener("click", () => console.log("Num of clicks:", ++numClicks));