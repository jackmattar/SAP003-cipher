document.getElementById("btnencode").addEventListener("click", cifrar);
document.getElementById("btndecoded").addEventListener("click", decifrar);
document.getElementById("btnclear").addEventListener("click", clear);

let stringencode= document.getElementById("stringencode");
let stringdecode= document.getElementById("stringdecode");
let offset= document.getElementById("offset");
let res= document.getElementById("result");

function cifrar(event) {
  event.preventDefault();

  if ((offset.value === ""|| offset.value === 0) || stringencode.value === "") {

    return res.innerHTML=("Verifique os dados e tente novamente");

  } else if (offset.value <0) {

    return res.innerHTML=( window.cipher.encode(-offset.value, stringencode.value));

  } else {

    return res.innerHTML=( window.cipher.encode(offset.value, stringencode.value));

  }

}

function decifrar(event) {
  event.preventDefault();

  if ((offset.value === ""|| offset.value === 0) || stringdecode.value === "") {

    return res.innerHTML=("Verifique os dados e tente novamente");
 
  } else if (offset.value <0) {

    return res.innerHTML=( window.cipher.decode(-offset.value, stringdecode.value));

  } else {

    return res.innerHTML=( window.cipher.decode(offset.value, stringdecode.value));

  }

}

function clear(event) {
  event.preventDefault();

  stringencode.value="";
  stringdecode.value="";
  offset.value="";

  return res.innerHTML=("");
  
}