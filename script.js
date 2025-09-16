var spanOutput, main,
    btnDemo, btnWrite, btnAlert, btnConsole;

function getElements() {
    spanOutput = document.querySelector("span.output");
    btnDemo = document.querySelector("button.demo");
    btnWrite = document.querySelector("button.write");
    btnAlert = document.querySelector("button.alert");
    btnConsole = document.querySelector("button.console");
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

(function() {
    getElements();
    btnDemo.addEventListener("click", sayHello);
    btnWrite.addEventListener("click", writeText);
    btnAlert.addEventListener("click", alertUser);
    btnConsole.addEventListener("click", writeConsole);
})();