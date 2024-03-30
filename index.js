let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 8
let pwOneEl = document.getElementById("pw-one");
let pwTwoEl = document.getElementById("pw-two");
let pwThreeEl = document.getElementById("pw-three");
let pwFourEl = document.getElementById("pw-four");

let slider = document.getElementById("slider-range");
let sliderNumber = document.getElementById("slider-number");
sliderNumber.textContent = slider.value;
slider.oninput = function() {
    sliderNumber.textContent= this.value;
}

slider.addEventListener("input", function () {
    sliderNumber.textContent = `${slider.value}`;
    passwordLength = slider.value;
  });

function generateRandomPw() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
      console.log(i);
    let randomIndex = Math.floor(Math.random() * characters.length);
    console.log(randomIndex)
    password += characters[randomIndex];
  }
  return password;
}

function getGeneratedPasswords() {
    pwOneEl.textContent = generateRandomPw();
    pwTwoEl.textContent = generateRandomPw();
    pwThreeEl.textContent = generateRandomPw();
    pwFourEl.textContent = generateRandomPw();
}

pwOneEl.addEventListener("click", copyToClipboard)
pwTwoEl.addEventListener("click", copyToClipboard)
pwThreeEl.addEventListener("click", copyToClipboard)
pwFourEl.addEventListener("click", copyToClipboard)

function copyToClipboard(e) {
    let password = e.target;
    navigator.clipboard.writeText(password.textContent).then(res=>{
        alert("Copied to clipboard");
     });
    
}