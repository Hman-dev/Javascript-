
var random= Math.floor(Math.random() * 100) + 1;
console.log (random)

var coups = 0;


    do{
        var chiffre= prompt("Le nombre à deviner est compris entre 1 et 100")
        coups++
        if(chiffre < random){
            alert("le chiffre est inférieur " + coups + "coups" )
            
              
        }else if(chiffre>random){
            alert("le chiffre est supérieur "  + coups + "coups" )
           
        }
        
    }
    while(random != chiffre)


if(chiffre == random){
    alert( "Merci, vous avez réussi ! en " + coups+ "coups"); 
    break; 

}else{
    alert("tu n'as pas reussi !dsl")
}
