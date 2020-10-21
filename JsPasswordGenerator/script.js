const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const resultEl = document.querySelector(".pass-result");
const generateBtn = document.querySelector(".generate");
const copyeBtn = document.querySelector(".copy");

generateBtn.addEventListener("click",()=>{
    genetatePassword();
});

copyeBtn.addEventListener("click",()=>{
    copyPasswordToClipboard();
})


function genetatePassword(){
    
    const upperFlag = uppercaseEl.checked ;
    const lowerFlag = lowercaseEl.checked;
    const numbersFlag = numbersEl.checked;
    const symbolsFlag = symbolsEl.checked;
    if(upperFlag == false && lowerFlag == false && numbersFlag == false && symbolsFlag == false)
    {
        alert("Please choose at least one choise.");
    }
    else{
    copyeBtn.disabled = false;
    let i = 0 ;
    result = [];
    while (i<lengthEl.value){
        if(lowerFlag){
        result+= randomString('a');
        i++;
        console.log(i + " - " + result);
        }
        if(numbersFlag && (i<lengthEl.value)){
        result+= randomString('#');
        i++;
        console.log(i + " - " + result);
        }
        if (upperFlag && (i<lengthEl.value)){
        result+= randomString('A');
        i++;
        console.log(i + " - " + result);
        }
        if(symbolsFlag && (i<lengthEl.value)){
        result+= randomString('!');
        i++;
        console.log(i + " - " + result);
        }
        
    }

    }
    resultEl.value = result.toString();
    resultEl.innerHTML = result.toString();
}

function randomString(chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'?,./|\\';
    var result = '';
    result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}

function copyPasswordToClipboard() {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = resultEl.value;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied the text: " + resultEl.value);
  }