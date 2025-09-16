var spanOutput,
    btnWrite;

function getElements() {
    spanOutput = document.querySelector("span.output");
    btnWrite = document.querySelector("button.demo");
}

function writeText() {
    spanOutput.textContent = "Hello JavaScript";
}

(function() {
    getElements();
    btnWrite.addEventListener("click", writeText);
})();