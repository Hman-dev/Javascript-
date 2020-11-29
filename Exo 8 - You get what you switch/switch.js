var produit= prompt("Entrez votre produit")
switch(produit){
    case 'tomate':
        alert("Bon pour la santé et vegan")
        break;

    case 'tofu':
        alert("issu du soja donc vegan mais sa culture intensive n'est pas top niveau environnement");
        break;

    case 'oeuf' :
        alert ("Origine animale même si ça n'est pas directement leur viande")
        break;

    case 'lait':
        alert("Origine animale même si ça n'est pas directement leur viande")
        break;

    case 'miel' :
        alert("abeille = animal = non vegan")
        break;

    case 'foie gras':
        alert("Pire aliment non vegan")
        break;

    default:
        alert("Poduit non répertorié")
}