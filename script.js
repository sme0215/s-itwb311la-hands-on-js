var spanOutput,
    btnDemo, btnWrite;

function getElements() {
    spanOutput = document.querySelector("span.output");
    btnDemo = document.querySelector("button.demo");
    btnWrite = document.querySelector("button.write");
}

function sayHello() {
    spanOutput.textContent = "Hello JavaScript";
}

function writeText() {
    document.write("This is written using document.write()");
}

(function() {
    getElements();
    btnDemo.addEventListener("click", sayHello);
    btnWrite.addEventListener("click", writeText);
})();