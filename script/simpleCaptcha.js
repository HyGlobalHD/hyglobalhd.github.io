// a simple captcha
// made for additional security for my form
//
let uinput = ''; // none for user input
let key = ''; // current key

let keySet = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
let temp = '';
for (let i = 0; i < 5; i++) { // 5 char long
    let randomPosition = Math.floor(Math.random() * keySet.length);
    temp += keySet.substring(randomPosition, randomPosition + 1);
}
key = temp;
console.log("Key: " + key); // debug purpose // chech if key is randomized
temp = ''; // empty temp

document.getElementById("captcha-data").innerHTML = key;

document.getElementById("captcha-button").disabled = true;
document.getElementById("captcha-button").style.display = 'none';
function captchaValidation() {
    uinput = document.getElementById("captcha-input").value;
    if (uinput != key) {
       alert("Wrong captcha code");
       console.log('Failed captcha');
    } else {
        console.log('Success captcha');
        document.getElementById("captcha-button").disabled = false;
        document.getElementById("captcha-button").style.display = 'block';
        captcha = false;
    }
}
