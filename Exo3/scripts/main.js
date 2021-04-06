//je crée une variable qui va récupérer la saisie dans la boite de dialogue
var person = prompt('Entrez votre Prénom');
//si le résultat est est différent de null "!=" veut dire différent de...
  // if(person != null){

//si person n'est pas un nombre ou qu'il est différent de empty, on affiche l'alerte
//"Nan" veut dire Not a number
  // if(isNaN(person)){

//si 'person' n'est pas un nombre ET que '' l'espace est différent de vide.
  if(isNaN(person) && person != ''){


// "typeof" veut dire type de... 'string' dans cet exemple
  // if(isNaN(person) || person == typeof('string')){

//alors le résultat s'affiche. Il affiche "bonjour" et le résultat que l'on a tapé
    alert('Bonjour '+ person);
//sinon l'alerte 'Veuillez vérifier votre saisie'
    }else {
      alert('Veuillez vérifier votre saisie!');
    }
