let valueOne = document.getElementById(`input_1`).value;
let valueSecond = document.getElementById(`input_2`).value;

const button = document.querySelector(`button`);

button.onclick = function() {
  function one () {
   if (valueOne < 1 || valueOne > 10 || typeof valueOne !== Number) {
     console.log ("Номер страницы вне диапазона от 1 до 10")
    } 
    if (valueSecond < 1 || valueSecond > 10 || typeof valueSecond !== Number) {
     console.log ("Лимит вне диапазона от 1 до 10")
   } 
    if ((valueOne < 1 || valueOne > 10 || typeof valueOne !== Number) && (valueSecond < 1 || valueSecond > 10 || typeof valueSecond !== Number)){
      console.log ("Номер страницы и лимит вне диапазона от 1 до 10") 
    } 
    else { 
      fetch (`https://picsum.photos/v2/list?page=${valueOne}&limit=${valueSecond}`)
      .then ((response) => {
        let result = response.json();
      })
      .catch ((error) => {
        console.log ("error")
      })
    }
  }
}
 
 
 
 
 
 
 
 
 
 
 
 
 
