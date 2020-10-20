var platillos = ["Enchiladas","Taco","Tamal","Pozole","Barbacoa","Guacamole","Quesadilla de Papa"];

// pregunta1
console.log("Pregunta1")

for (i=0;i<platillos.length;i++){
    console.log(platillos[i])
}

// pregunta 2

console.log("Pregunta2")
for (i=0;i<platillos.length;i++){
    if (platillos[i] === "Pozole" || platillos[i] === "Barbacoa"  ){
        console.log(platillos[i])
    }
}

// pregunta 3
console.log("Pregunta3")
for (i=0;i<platillos.length;i++){

     if ((i%2)!== 0){
        console.log(platillos[i])
     }
    
}


// pregunta 4
console.log("Pregunta4")
for (i=0;i<platillos.length;i+= 2){

    
       console.log(platillos[i])
    
   
}

//Ejerci

function imprimir100 (valor = 100 ){
    
    if (valor === 0 ){

        return 0

    }else {
        console.log
    }

}

