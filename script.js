var spanOutput,
    btnDemo, btnWrite, btnAlert;

function getElements() {
    spanOutput = document.querySelector("span.output");
    btnDemo = document.querySelector("button.demo");
    btnWrite = document.querySelector("button.write");
    btnAlert = document.querySelector("button.alert");
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

(function() {
    getElements();
    btnDemo.addEventListener("click", sayHello);
    btnWrite.addEventListener("click", writeText);
    btnAlert.addEventListener("click", alertUser);
})();