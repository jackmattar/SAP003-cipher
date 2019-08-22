window.cipher = {
  encode: encode,
  decode: decode
}

function encode(offset, stringencode){

  let txtencode= new Array;
  
  let textcipher= new Array;

  offset= Number(offset)

  for (i in stringencode){

    stringencode= stringencode.toUpperCase()
    
    let asciinum= stringencode.charCodeAt(i)

    if (asciinum >= 65 && asciinum <= 90){

      let n2 = txtencode.push(asciinum)

      let decodedtxt= ((txtencode[i]) + 65 + offset) % 26 + 65

      let novamensagem= String.fromCharCode(decodedtxt)

      textcipher.push (novamensagem)
    
    } else {

      txtencode.push(stringencode.charAt(i))
      textcipher.push(stringencode.charAt(i))

    }

      textcipher.join
  }
  
 return textcipher.join("")
 console.log(textcipher.join(""))
}

function decode(offset, stringdecode){

  let txtencode= new Array;
  
  let textcipher= new Array;

  offset= Number(offset)

  for (i in stringdecode){

    stringdecode= stringdecode.toUpperCase()
    
    let asciinum= stringdecode.charCodeAt(i)

    if (asciinum >= 65 && asciinum <= 90){

      let n2 = txtencode.push(asciinum)

      let decodedtxt= ((txtencode[i]) + 65 - offset) % 26 + 65

      let novamensagem= String.fromCharCode(decodedtxt)

      textcipher.push (novamensagem)
    
    } else {

      txtencode.push(stringdecode.charAt(i))
      textcipher.push(stringdecode.charAt(i))

    }

      textcipher.join
  }
  
 return textcipher.join("")
 console.log(textcipher.join(""))
}
