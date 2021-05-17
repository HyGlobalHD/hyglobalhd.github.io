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
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
}

// below is to hide and unhide content based on id, and button clicked
// this idea is so that user doesn't need to scroll  back to the top, etc.
// intro, family, pets, schedule, hobby, contact
var d1 = document.getElementById('intro'),
    d2 = document.getElementById('family'),
    d3 = document.getElementById('pets'),
    d4 = document.getElementById('schedule'),
    d5 = document.getElementById('hobby'),
    d6 = document.getElementById('contact')
    d0 = document.getElementById('splash');

function setVisible(id_data) {
    console.log(id_data + " clicked"); // debug purpose
    d0.style.display = 'none';
    switch (id_data) {
        case '1':
            d1.style.display = 'block';
            d2.style.display = 'none';
            d3.style.display = 'none';
            d4.style.display = 'none';
            d5.style.display = 'none';
            d6.style.display = 'none';
            break;
        case '2':
            d1.style.display = 'none';
            d2.style.display = 'block';
            d3.style.display = 'none';
            d4.style.display = 'none';
            d5.style.display = 'none';
            d6.style.display = 'none';
            break;

        case '3':
            d1.style.display = 'none';
            d2.style.display = 'none';
            d3.style.display = 'block';
            d4.style.display = 'none';
            d5.style.display = 'none';
            d6.style.display = 'none';
            break;

        case '4':
            d1.style.display = 'none';
            d2.style.display = 'none';
            d3.style.display = 'none';
            d4.style.display = 'block';
            d5.style.display = 'none';
            d6.style.display = 'none';
            break;

        case '5':
            d1.style.display = 'none';
            d2.style.display = 'none';
            d3.style.display = 'none';
            d4.style.display = 'none';
            d5.style.display = 'block';
            d6.style.display = 'none';
            break;

        case '6':
            d1.style.display = 'none';
            d2.style.display = 'none';
            d3.style.display = 'none';
            d4.style.display = 'none';
            d5.style.display = 'none';
            d6.style.display = 'block';
            break;

        default:
            break;
    }
}
// 
