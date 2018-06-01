//llamando a mis variables//
let offset=document.getElementById("offset");
let string=document.getElementById("string").toUpperCase();

//generando evento para desencadenar la funcion cifrar//

document.getElementById("encode").addEventListener("click",()=>{
    document.getElementById("change").value=cipher.encode(offset.value, string.value);
});

//generando evento para desencadenar la funcion descifrar//

document.getElementById("decode").addEventListener("click",()=>{
document.getElementById("change").value=cipher.decode(offset.value, string.value); 
});