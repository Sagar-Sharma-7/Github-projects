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



// demos
gradientDemo = () => {
    window.open("https://sagar-sharma-7.github.io/Gradients-Palette/")
}

batteryDemo = () => {
    window.open("https://sagar-sharma-7.github.io/battery-status/public/index.html")
}

bgcolorChangerCode = () => {
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