

const button = document.querySelector('button');

button.onclick = function() {
if ((valueOne < 100 || valueOne > 300 || typeof valueOne!== Number) || (valueSecond < 100 || valueSecond > 300 || typeof valueSecond !== Number)) {
   console.log ("Одно из чисел вне диапазона от 100 до 300");
 } else {
 fetch (`https://picsum.photos/${valueOne}/${valueSecond}`)
  .then ((response) => {
   let result = response.json();
})
   .catch ((error) => console.log ('error'))     
 }
}