document.getElementById("btnencode").addEventListener("click", cifrar);
document.getElementById("btndecoded").addEventListener("click", decifrar);

let stringencode= document.getElementById("stringencode");
let stringdecode= document.getElementById("stringdecode");
let offset= document.getElementById("offset");
let res= document.getElementById("result");

function cifrar() {

  document.getElementById("form").addEventListener("submit", event => {
  
    event.preventDefault();

    return res.innerHTML=( window.cipher.encode(offset.value, stringencode.value));
  });
}

cifrar();

function decifrar() {

  document.getElementById("form").addEventListener("submit", event => {
  
    event.preventDefault();

    return res.innerHTML=( window.cipher.decode(offset.value, stringdecode.value));
  });
}

decifrar();