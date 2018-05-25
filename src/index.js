//nombrando elementos html a trabajar//
var introText= document.getElementById('intro').value;
var jumpPositions= document.getElementById('jump').value;
var encrypted="";
//especifica cada letra del texto ingresado.//
for(i=0;i<introText.length;i++){
//ubicacion de letra en codigo unicode (CharCodeAt) y la cambiamos a acii con formula//
var locationLetter=((introText.CharCodeAt(i)-65)+jumpPositions)%26+65;
//conversion acii a unicode//
var textCipher=String.fromCharCode(locationLetter);
//adicionando valor a var encrypted//
encrypted+=textCipher;
}
//creando evento click//
document.getElementById("formulario").addEventListener(click,myFunction()){
document.getElementById('change').innerHTML=encrypted;
}
