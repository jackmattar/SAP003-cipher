/*window.cipher = {
  encode: cipherencode(),
  decode: cipherdecode()
};*/

function encode(){

  event.preventDefault()


  let displacement= document.getElementById("offset").value

  let disptonum= Number(displacement)

  let res= document.getElementById("result")

  let txtencode= new Array;
  
  let textcipher= new Array;



  function taketxt(){

  var txtcipher= document.getElementById("stringencode").value
   return txtcipher.toUpperCase();
  }

  function uppertxt(txt){
    return txt.toUpperCase();
  }

  for (i in taketxt()){
    
    let n1=  (taketxt().charCodeAt(i))
   

    if (n1 >= 65 && n1 <= 90){

      let n2 = txtencode.push(n1)

      let decodedtxt= ((txtencode[i]) - 65 + disptonum ) % 26 + 65
      //console.log(decodedtxt)

      let novamensagem= String.fromCharCode(decodedtxt)
      //console.log(novamensagem)

      textcipher.push (novamensagem)
      // console.log(textcipher)
    

    } else {

      txtencode.push(taketxt().charAt(i))
      textcipher.push(taketxt().charAt(i))
      console.log(textcipher)

    }

      textcipher.join
  }
  
 return res.innerHTML=(textcipher.join(""))
}

function decode(){

 // event.preventDefault()


  let displacement= document.getElementById("displacement").value

  let disptonum= Number(displacement)

  let res= document.getElementById("result")

  let txtencode= new Array;
  
  let textcipher= new Array;



  function taketxt(){

    var txtcipher= document.getElementById("stringdecoded").value
   return(uppertxt(txtcipher));
  }

  function uppertxt(txt){
    return txt.toUpperCase();
  }

  for (i in taketxt()){
    
    let n1=  (taketxt().charCodeAt(i))
   

    if (n1 >= 65 && n1 <= 90){

      let n2 = txtencode.push(n1)
      console.log(n2)

      let decodedtxt= ((txtencode[i]) - 65 + disptonum ) % 26 + 65
      //console.log(decodedtxt)

      let novamensagem= String.fromCharCode(decodedtxt)
      //console.log(novamensagem)

      textcipher.push (novamensagem)
      // console.log(textcipher)
    

    } else {

      txtencode.push(taketxt().charAt(i))
      textcipher.push(taketxt().charAt(i))
      console.log(textcipher)

    }

      textcipher.join
  }
  
 return res.innerHTML=(textcipher.join(""))
}





