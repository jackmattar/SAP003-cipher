const offset = document.querySelector('.offset');
const message = document.querySelector('.message-area');
const buttons = document.querySelectorAll('.buttons');
const resultMessage = document.querySelector('.result-message');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const txtButton = e.target.textContent;
    const offsetValue = +offset.value;  

    if (txtButton === 'Limpar') {
      message.value = ''
      offset.value = '';
      resultMessage.innerHTML = '';
    } else if ((message.value === '' || 0) || (offset.value === '' || 0)) {
      resultMessage.innerHTML = 'Verifique os dados e tente novamente';
    } else if (txtButton === 'Cifrar') {
      return resultMessage.innerHTML= (window.cipher.encode(offsetValue, message.value));
    } else {
      resultMessage.innerHTML = window.cipher.decode(offsetValue, message.value);
    };
  });
});