 window.cipher = {
    encode : (offset,string) => {
        //funcion que se ejecutara despues del click boton cifrar//
        //elementos HTML a trabajar//
        string=string.toUpperCase();
        let resultPosition = "";
    
        //extraer letras del mensaje una a una//
        for(let i=0; i<string.length; i++){
        //buscar la posicion en unicode//
        let unicodePosition=string.charCodeAt(i);
        //buscar la posicion en acci//
        let acciPosition=(unicodePosition-65+parseInt(offset))%26+65;
        //adicionar contenido alfabetico cifrado a variable encode//
        resultPosition+=String.fromCharCode(acciPosition);
        }
        return resultPosition;
    },
    decode : (offset,string)=>{
        //funcion que se ejecutara despues del click boton descifrar//
        string=string.toUpperCase();
        let resultPosition="";
        //extraer letras del mensaje una a una//
        for(let i=0; i<string.length; i++){
        //buscar la posicion en acci//
        let acciPosition1=string.charCodeAt(i);
        //buscar la posicion en unicode//
        let unicodePosition1=(acciPosition1-parseInt(offset));
        //adicionar contenido alfabetico descifrado a variable decode //
        resultPosition+=String.fromCharCode(unicodePosition1);
         }
        return resultPosition;
 }
};