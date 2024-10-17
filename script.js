const passwordBox = document.getElementById('password');
const copy = document.getElementById('copy');

const generatePasswordBtn = document.getElementById('generatebtn');
let length = 12;

const upperCase = 'ABCDEFGHIJKLMNPQRSTUVXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()|"?><';

function generatePassword() {
  let generatedPassword = '';
  while (generatedPassword.length < length) {
    generatedPassword +=
      upperCase.charAt(Math.random() * upperCase.length) +
      lowerCase.charAt(Math.random() * lowerCase.length) +
      number.charAt(Math.random() * number.length) +
      symbol.charAt(Math.random() * symbol.length);
  }
  return generatedPassword;
}

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
  alert('password copied!');
}

copy.addEventListener('click', copyPassword());
generatePasswordBtn.addEventListener('click', () => {
  passwordBox.value = generatePassword();
});
