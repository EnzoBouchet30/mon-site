console.log("Bonjour !");
let prenom = "Enzo";
let age = 29;
console.log(`Je m'appelle ${prenom} et j'ai ${age} ans.`);
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}
function verifierAge(age) {
    if (age >= 18) {
        console.log("Majeur");
    } else {
        console.log("Mineur");
    }
}
verifierAge(12);
verifierAge(18);
verifierAge(40);
const bouton = document.querySelector("#monBouton");
bouton.addEventListener("click", function () {
    document.querySelector("h1")
   .textContent = "Tyler Durdon";
});