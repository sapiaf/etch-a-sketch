// VARIABLES
const gridContainer = document.querySelector('.grid')
const range = document.getElementById('slider')
const blackButton = document.getElementById('black')
const resetButton = document.getElementById('reset')
const colorSlider = document.getElementById('color')
const rgbButton = document.getElementById('rgb')



// EVENT LISTENERS
range.addEventListener('input', () => {
    const rangeValue = document.querySelector('.value').textContent = range.value
    gridContainer.innerHTML = "";
    createGrid()
})

resetButton.addEventListener('click', () => {
    range.value = 16;
    gridContainer.innerHTML = "";
    createGrid()
})

blackButton.addEventListener('click', () => {
    changeColor('black')
})

rgbButton.addEventListener('click', () => {
    changeColor('random')
})

colorSlider.addEventListener('input', () => {
    changeColor(colorSlider.value)
})



// FUNCTIONS
function createGrid() {
    for (let i = 0; i < range.value * range.value; i++) {
        let cell = document.createElement('div')
        gridContainer.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${range.value}, 1fr)`;
        cell.classList.add("cell")
        gridContainer.appendChild(cell)
    }

    changeColor('black')
}


function randomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function changeColor(color) {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (color === 'random') {
                cell.style.backgroundColor = randomColor();
            } else {
                cell.style.backgroundColor = color;
            }
        });
    });
}

createGrid()
