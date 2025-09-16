var spanOutput, main,
    btnDemo, btnWrite, btnAlert, btnConsole;

function getElements() {
    spanOutput = document.querySelector("span.output");
    main = document.querySelector("main");
}

function sayHello() {
    spanOutput.textContent = "Hello JavaScript";
}

function writeText() {
    document.write("This is written using document.write()");
}

function alertUser() {
    window.alert("This is an alert box!");
}

function writeConsole() {
    console.log("This is a console log message.");
}

function addNumbers() {
    let num1Text = document.querySelector("#num1").value;
    let num2Text = document.querySelector("#num2").value;
    let num1 = parseInt(num1Text);
    let num2 = parseInt(num2Text);
    spanOutput.textContent = num1 + num2;
}

function handleBtnClick(event) {
    const buttonClass = event.target.className;

    if (buttonClass === "demo")
        sayHello();
    else if (buttonClass === "write")
        writeText();
    else if (buttonClass === "alert")
        alertUser();
    else if (buttonClass === "console")
        writeConsole();
    else if (buttonClass === "add")
        addNumbers();
}

(function() {
    getElements();
    main.addEventListener("click",  handleBtnClick);
})();