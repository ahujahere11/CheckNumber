function checkNumber() {
    let input = prompt("Enter a number:");
    let number = parseFloat(input);

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    if (number > 0) {
        alert("Positive number.");
    } else if (number < 0) {
        alert("Negative number.");
    } else {
        alert("Zero.");
    }
}
