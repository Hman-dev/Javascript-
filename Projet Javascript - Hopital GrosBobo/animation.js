
function affiche(id){
    var texts= document.getElementsByClassName('text')
    var btns =document.getElementsByClassName('btn')
    for(var i= 0; i <texts.length ; i++ ){
        texts[i].classList.add("d-none")
        btns[i].classList.remove('rouge')
        if(btns[i].classList.contains(id)){
            btns[i].classList.add('rouge')
        } 
    }
    document.getElementById(id).classList.remove("d-none")
    
  
      
}

    
