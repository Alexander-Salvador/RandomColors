function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

const bodyColor = document.getElementById('colorBody')
const paragraphColor = document.getElementById('colorParagraph')
const changeColorButton = document.getElementById('changeColorButton')

changeColorButton.addEventListener('click', () => {
    const newColor = generateRandomColor();
    bodyColor.style.backgroundColor = newColor
    paragraphColor.textContent = newColor
})

