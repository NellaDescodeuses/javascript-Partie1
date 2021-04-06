//je crée une fonction qui permet d'afficher le résultat de la multiplication des 2 inputs.
function numbers(){
  //je crée 2 variable pour mes inputs et 1 pour le résultat
  let number1 = document.getElementById('firstNumber').value;
  let number2 = document.getElementById('secondNumber').value;
  let result = number1 * number2;
  //j'ajoute un condition qui dit : si inputs 1 et 2 sont remplies , alors un alerte s'ouvre avec le résultat
  if(number1 && number2){
    alert('Le résultat est : ' + result);
    //si cette condition n'est pas remplie, alors une alerte s'ouvre avec le message d'erreur.
  }else {
    alert('Veuillez remplir les champs');
  }
}
