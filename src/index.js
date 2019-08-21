let offset= ""
let stringencode= document.getElementById("stringencode")
let stringdecode= ""

let res= ""


function cifrar(){
    event.preventDefault()
    window.cipher.encode();
}
cifrar(offset, stringencode)

function decifrar(){
    window.cipher.decode();

}
decifrar(offset, stringdecode)