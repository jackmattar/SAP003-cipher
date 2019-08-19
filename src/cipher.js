window.cipher = {
  encode: cipherencode,
  decode: cipherdecode
};

function cipherencode(){

  event.preventDefault()

  // RECEBE O VALOR DE "DESLOCAMENTO"
  let displacement= document.getElementById("displacement").value

  // TRANSFORMA VALOR DE "DESLOCAMENTO" EM NÚMERO
  let dispnum= Number(displacement)

  // RECEBE O VALOR DE "CIFRAR"
  let txtcode= document.getElementById("textencoded").value
  
  // DESCOBRE ASCII DE "CIFRAR" E TRANSFORMA EM NÚMERO
  let asciinum= Number(txtcode.charCodeAt(0))
  
  // RECEBE LUGAR ONDE EXIBIRÁ RESULTADO
  let res= document.getElementById("result")

 //CIFRA
  let decodedtxt= ( (asciinum - 65) + dispnum ) % 26 + 65

  //DESCOBRE A STRING DO NÚMERO CIFRADO
  let newcode= String.fromCharCode(decodedtxt)

  res.innerHTML= (`Seu texto: ${newcode}`)

}


function cipherdecode(){

  event.preventDefault()

  // RECEBE O VALOR DE "DESLOCAMENTO"
  let displacement= document.getElementById("displacement").value

  // TRANSFORMA VALOR DE "DESLOCAMENTO" EM NÚMERO
  let dispnum= Number(displacement)

  // RECEBE O VALOR DE "DECIFRAR"
  let txtcode= document.getElementById("textdecoded").value
  
  // DESCOBRE ASCII DE "DECIFRAR" E TRANSFORMA EM NÚMERO
  let asciinum= Number(txtcode.charCodeAt(0))
  
  // RECEBE LUGAR ONDE EXIBIRÁ RESULTADO
  let res= document.getElementById("result")

  //DESCIFRA
  let decodedtxt= ( (asciinum - 65) - dispnum ) % 26 + 65

  //DESCOBRE A STRING DO NÚMERO DECIFRADO
  let newcode= String.fromCharCode(decodedtxt)

  res.innerHTML= (`Seu texto: ${newcode}`)

}