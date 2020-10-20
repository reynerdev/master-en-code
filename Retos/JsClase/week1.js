
while(1){
var question = parseInt(
  prompt(
    "Escoge que pregunta desea ejectura \n 1: Pregunta 1 \n 2: Pregunta 2 \n 3: Pregunta3 "
  )
);

if (question == 2) {
 
  var user1 = parseInt(
    prompt("Ingrese Jugador 1 (Ingrese 1 , 2 o 3): \n 1: Tijera \n  2: Papel \n  3: Piedra").trim()
  );
  
  var user2 = parseInt(
    prompt("Ingrese Jugador 2 (Ingrese 1 , 2 o 3): \n 1: Tijera \n  2: Papel \n   3: Piedra").trim()
  );

  console.log(user1);
  console.log(user2);
  if (user1 == 1 && user2 == 1) {
    console.log("Empate");
  } else if (user1 == 1 && user2 == 2) {
    console.log("Gano Jugador uno");
  } else if (user1 == 1 && user2 == 3) {
    console.log("Gano jugador dos");
  } else if (user1 == 2 && user2 == 1) {
    console.log("Gano jugador dos");
  } else if (user1 == 2 && user2 == 2) {
    console.log("Empate");
  } else if (user1 == 2 && user2 == 3) {
    console.log("Gano jugador dos");
  } else if (user1 == 3 && user2 == 1) {
    console.log("Gano jugador dos");
  } else if (user1 == 3 && user2 == 2) {
    console.log("Gano jugador uno");
  } else if (user1 == 3 && user2 == 3) {
    console.log("Empate");
  } else {
  }
} else if (question == 1) {
  var digit1 = parseInt(prompt("Ingrese primer digito").trim());
  var digit2 = parseInt(prompt("Ingrese segundo digito").trim());
  var digit3 = parseInt(prompt("Ingrese tercer digito").trim());

  var suma = digit1 + digit2 + digit3;
  console.log("La suma es: " + suma);
} else if (question == 3) {
  var digit1 = parseInt(prompt("Ingrese primer digito").trim());
  var digit2 = parseInt(prompt("Ingrese segundo digito").trim());
  var digit3 = parseInt(prompt("Ingrese tercer digito").trim());

  if (digit1 >= digit2) {
    if (digit1 >= digit3) {
      console.log("El mayor es " + digit1);
      
    }else  {
        console.log("El mayor es " + digit3);
        
    }
    
  } else{
      if (digit2 >= digit3){
      console.log("El mayor es " + digit2)}
      else{
          console.log("El mayo es " + digit3)
      }
  } 
}

}