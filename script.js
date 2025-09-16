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
}

(function() {
    getElements();
    main.addEventListener("click",  handleBtnClick);
})();