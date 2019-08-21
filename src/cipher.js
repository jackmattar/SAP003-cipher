window.cipher = {
  encode: encode(),
  decode: decode()
};

function encode(offset, stringencode){

  event.preventDefault()

  res= document.getElementById("result")

  let taketxt= stringencode.toUpperCase()

  let offset= document.getElementById("offset").value

  offset_num= Number(offset)
 
  let txtencode= new Array;
  
  let textcipher= new Array;


  for (i in taketxt){
    
    let asciinum=  (taketxt.charCodeAt(i))
   

    if (asciinum >= 65 && asciinum <= 90){

      let n2 = txtencode.push(asciinum)

      let decodedtxt= ((txtencode[i]) + 65 + offset_num ) % 26 + 65

      let novamensagem= String.fromCharCode(decodedtxt)

      textcipher.push (novamensagem)
    
    } else {

      txtencode.push(taketxt.charAt(i))
      textcipher.push(taketxt.charAt(i))

    }

      textcipher.join
  }
  
 return res.innerHTML=(textcipher.join(""))
}

function decode(offset, stringdecode){

  event.preventDefault()

  stringdecode= document.getElementById("stringdecode").value

  res= document.getElementById("result")

  let taketxt= stringdecode.toUpperCase()

  let offset= document.getElementById("offset").value

  offset_num= Number(offset)
 
  let txtencode= new Array;
  
  let textcipher= new Array;


  for (i in taketxt){
    
    let asciinum=  (taketxt.charCodeAt(i))
   

    if (asciinum >= 65 && asciinum <= 90){

        let n2 = txtencode.push(asciinum)

        let decodedtxt= ((txtencode[i]) + 65 - offset_num ) % 26 + 65

        let novamensagem= String.fromCharCode(decodedtxt)

        textcipher.push (novamensagem)
    
        } else {

          txtencode.push(taketxt.charAt(i))
          textcipher.push(taketxt.charAt(i))

        }
  }
}