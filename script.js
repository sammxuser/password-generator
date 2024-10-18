const passwordBox = document.getElementById('password');
const copyElement = document.getElementById('copyImg');

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
  // Using the execCommand(deprecated!)
  //   passwordBox.select();
  //   document.execCommand('copy');
  //   alert('password copied!');

  //   Using Clipboard API for the copy functionality
  const copiedPassword = async () => {
    try {
      await navigator.clipboard.writeText(passwordBox.value);
      alert('Password copied!');
      passwordBox.value = '';
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };
  copiedPassword();
}

copyElement.addEventListener('click', () => {
  copyPassword();
});

generatePasswordBtn.addEventListener('click', () => {
  passwordBox.value = generatePassword();
});
