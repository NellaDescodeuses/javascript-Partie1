//création d'une fonction qui me permet de récupérer et afficher
//les valeurs saisient dans les inputs
// function displayInput(){
//   let inputLastName = document.getElementById('nom').value;
//   let inputFirstName = document.getElementById('prenom').value;
//   let inputCity = document.getElementById('ville').value;
// si les 3 input sont remplient, alors tu affiches les input dans l'alerte
//     if(inputLastName && inputFirstName && inputCity){
//   alert('Nom : ' + inputLastName + '\n' + 'Prénom : ' + inputFirstName + '\n' + 'Ville : ' + inputCity);
// //sinon tu affiches cette alerte
//   }else {
//     alert('Veuillez remplir tous les champs');
//     }
// }
//2nd méthode
function displayInput() {
var name = document.form1.name.value;
var firstName = document.form1.firstName.value;
var city = document.form1.city.value;
alert(`Votre nom est: ${name} \n Votre prénom est: ${firstName} \n Votre ville est: ${city}`);
}
