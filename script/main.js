// The code below are inspired from innerHTML documentation, and has been improviesed
// the code are to get the current year and compare it to the year, the code are made.
var getYear = new Date().getFullYear(); // current year
if (getYear > 2021) {
    document.getElementById("year").innerHTML = "2021 - " + getYear
} else {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

// the function below are taken by w3schools
// it function as a copy to clipboard when clicked
// since thereis nothing to be improvised for this code, it is left alone for the future endavour. 
function copyText() {
    var copyText = document.getElementById("copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}