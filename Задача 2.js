let jsonList = `{
    "list": [
    {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
   }
   ]
   }`

let jsCode = JSON.parse(jsonList);

console.log(jsCode);
