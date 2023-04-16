const container = document.querySelector('#container');
const LoginButton = document.querySelector('#Login');
const SignButton = document.querySelector('#Sign');

SignButton.addEventListener('click', () => container.classList.add('right_transiation_active'));
LoginButton.addEventListener('click', () => container.classList.remove('right_transiation_active'));