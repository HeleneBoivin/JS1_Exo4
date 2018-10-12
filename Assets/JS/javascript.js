
function afficheIdentité(){
var FirstName = document.getElementById("prénom").value;
var LastName = document.getElementById("nom").value;
var City = document.getElementById("ville").value;
var result ="nom : " + LastName + '\n' + "prénom : " + FirstName + '\n' + "ville : " + City;
if(isNaN(LastName) && isNaN(FirstName) && isNaN(City))
{
alert(result);
}else{
  alert("veuillez compléter les champs correctement")}
}
