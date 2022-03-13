const value = document.querySelector('input').value;
const button = document.querySelector('button');

button.onclick = function () {
if (value > 10 || value < 1) {
console.log ("Число вне диапазона от 1 до 10");
} else{
  const xhr = new XMLHttpRequest();
  xhr.open (`get`, `https://picsum.photos/v2/list?limit=${value}`, true);
  
  xhr.onload = function() {
if (xhr.status != 200) {
console.log('Статус ответа: ', xhr.status);
} else {
console.log('Результат: ', JSON.parse(xhr.response));
}
};
  xhr.onerror = function() {
console.log('Ошибка! Статус ответа: ', xhr.status);
};
  xhr.send();
}
}
