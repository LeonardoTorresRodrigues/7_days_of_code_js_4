const randomNumber = Math.floor(Math.random() * (10 - 0 + 1 + 0));
console.log(randomNumber)

alert("Você consegue adivinhar em qual número o seu computador pensou?");
let chute = "";
let acertou = false;

for(i = 3; i >= 1; i--) {
  alert(`Você tem ${i} tentativas!`)
  chute = prompt("De 0 a 10. Qual valor você quer chutar?");

  if (chute == randomNumber) {
    alert(`Parabéns, você acertou! Era ${randomNumber}`);
    acertou = true;
    break;
  } else if (chute < randomNumber) {
    alert("O número é maior!");
  } else if (chute > randomNumber) {
    alert("O número é menor!");
  }

  if(i === 1) {
    alert(`Que pena, suas chances acabaram! O número era ${randomNumber}`);
  }
}
