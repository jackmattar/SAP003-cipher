const encode = (offset, message) => {  
  const newMessage = [];

  for(i in message){
    const toAsciiNum = message.charCodeAt(i);    
    if(toAsciiNum >= 65 && toAsciiNum <= 90) {
      newMessage.push(String.fromCharCode(((toAsciiNum - 65) + (offset %26+26)) % 26 + 65));
    } else if (toAsciiNum >= 97 && toAsciiNum <= 122){
      newMessage.push(String.fromCharCode(((toAsciiNum - 97) + (offset %26+26)) % 26 + 97));
    } else {
      newMessage.push(message.charAt(i));
    };
  };  
  return newMessage.join(''); 
};

const decode = (offset, message) => {
  return encode(-offset, message)
};

window.cipher = {
  encode: encode,
  decode: decode
};