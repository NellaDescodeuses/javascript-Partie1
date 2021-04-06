/*création de la fonction et de la variable qui
permet de récupérer et afficher
les valeurs de l'input
*/
function myAge() {
  let age = document.getElementById('age').value;
  //je crée une 1ere condition qui dit:
  //si la variable age existe
  if (age) {
  //si la var age est sup a 0
  if (age > 0){
    //si la var age est sup ou égale a 18
    if(age >= 18){
      //alors une modale affiche vous êtes majeur
    alert('Vous êtes majeur');
    sinon une modale affiche vous êtes mineur
    }else{
      alert('Vous êtes mineur');
    }
    //si la condition ligne 11 n'est pas remplis, une modale demande un âge valide
  }else{
    alert('Veuillez entrer un âge valide');
  }
  //si la condition ligne 9 n'est pas remplie (si age n'existe pas) alors on demande à l'utilisateur de remplir les champs
  }else{
    alert('veuillez remplir les champs')
  }
}
