const heading = document.querySelector(".heading");
const name_project = document.querySelectorAll(".name");
const buttons = document.querySelectorAll("button");
const codeBtn = document.querySelectorAll(".code");
const demoBtn = document.querySelectorAll(".demo");
// text content
heading.textContent = "My Github Projects";
codeBtn.forEach(x => {
    x.textContent = "Get Codes";
});
demoBtn.forEach(y => {
    y.textContent = "Demo";
})

const projectArr = [
    "Gradient Palette",
    "Battery",
    "BG Color Changer",
    "BMI Calculator",
    "Cheat Sheet",
    "Color Palette",
    "Covid19 India",
    "Covid19 World",
    "Dictionary",
    "Currency Converter",
    "Quotes Generator",
    "Reaction Game",
    "Number Guessing Game",
    "Ceaser Cipher",
    "Digital Clock",
    "Quadractic Equation Solver",
    "Weight Converter",
    "LCM-HCF Calculator",
    "Height Converter",
    "Password Generator",
    "Face Detection"
]

for(let i = 0; i < projectArr.length; i++){
    name_project[i].textContent = projectArr[i];
}


// codes
gradientCode = () => {
    window.open("https://github.com/Sagar-Sharma-7/Gradients-Palette")
}

batteryCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/battery-status")
}

bgcolorChangerCode = () => {
    window.open("https://github.com/Sagar-Sharma-7/background-color-changer")
}

bmiCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/BMI-Calculator")
}

cheatSheetCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Cheat-Sheet")
}

colorPalatteCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Color-Palette")
}

indiaCovidCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Covid19-Tracker-India")
}

worldCovidCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Covid19-Tracker-Countr")
}

dictionaryCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/dictionary")
}

currencyCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Currency-Converter")
}

quotesCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Quotes-Generator")
}

reactionGameCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Reaction-Game")
}

numGuessingCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Number-guessing-game")
}

ceaserCipherCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Ceaser-Cipher")
}

digitalClockCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Digital-Clock")
}

quadraticCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Quadratic-Equation-Solver")
}

weightCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Weight-Converter")
}

lcmHcfCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/LCM-HCF")
}

heightCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/height-converter.github.io")
}

passwordCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Password-Generator")
}

faceDetectionCodes = () => {
    window.open("https://github.com/Sagar-Sharma-7/Face_Detection")
}


// demos
gradientDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Gradients-Palette/")
}

batteryDemo = () => {
    window.open("https://sagar-sharma-7.github.io/battery-status/public/index.html")
}

bgcolorChangerDemo = () => {
    window.open("https://sagar-sharma-7.github.io/background-color-changer/index.html")
}

bmiDemo = () => {
    window.open("https://sagar-sharma-7.github.io/BMI-Calculator/")
}

cheatSheetDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Cheat-Sheet/")
}

colorPalatteDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Color-Palette/")
}

indiaCovidDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Covid19-Tracker-India/")
}

worldCovidDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Covid19-Tracker-Countries/")
}

dictionaryDemo = () => {
    window.open("https://sagar-sharma-7.github.io/dictionary/")
}

currencyDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Currency-Converter/")
}

quotesDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Quotes-Generator/")
}

reactionGameDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Reaction-Game/public/index.html")
}

numGuessingDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Number-guessing-game/")
}

ceaserCipherDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Ceaser-Cipher/")
}

digitalClockDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Digital-Clock/public/d-clock.html")
}

quadraticDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Quadratic-Equation-Solver/")
}

weightDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Weight-Converter/public/index.html")
}

lcmHcfDemo = () => {
    window.open("https://sagar-sharma-7.github.io/LCM-HCF/")
}

heightDemo = () => {
    window.open("https://sagar-sharma-7.github.io/height-converter.github.io/public/index.html")
}

passwordDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Password-Generator/")
}