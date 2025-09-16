var spanOutput,
    btnDemo;

function getElements() {
    spanOutput = document.querySelector("span.output");
    btnDemo = document.querySelector("button.demo");
}

function sayHello() {
    spanOutput.textContent = "Hello JavaScript";
}

(function() {
    getElements();
    btnDemo.addEventListener("click", sayHello);
})();