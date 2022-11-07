var nombre_de_personas = [];
function enviar_1() {
    var invitado = document.getElementById("nombre_invitado").value;
    nombre_de_personas.push(invitado); 
    console.log(invitado);
     console.log(nombre_de_personas);
      var cuenta_letras_nombres = nombre_de_personas.length;
       console.log(cuenta_letras_nombres);
       document.getElementById("display_name").innerHTML = nombre_de_personas.toString();
}
function ordenar_nombres() { nombre_de_personas.sort();
     var i = nombre_de_personas.join("<br>");
 console.log(nombre_de_personas); 
document.getElementById("sorted").innerHTML = i.toString();
 }

