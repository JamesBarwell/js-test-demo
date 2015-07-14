function showResult(a, b, c) {
    var result = sum_and_multiply(a, b, c);
    var resultElement = window.document.getElementById('result');
    resultElement.innerHTML = result
}
