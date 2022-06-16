const loader = document.querySelector(".loading-text");
const spinner = document.querySelector(".spinner");
const image = document.querySelector(".bg");

let count = 0;
let precentage = setInterval(load, 50);

function load() {
  count++;
  if (count === 100) {
    clearInterval(precentage);
  }
  loader.innerText = `${count}%`;
  loader.style.opacity = scale(count, 0, 100, 1, 0);
  spinner.style.opacity = scale(count, 0, 100, 1, 0);
  image.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
