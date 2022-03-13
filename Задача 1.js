const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let result = [];

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

studentNode.forEach(function(i){
  let student = {};
  let nameNode = i.querySelector("name");
  let firstNode = nameNode.querySelector("first");
  let secondNode = nameNode.querySelector("second");
  let ageNode = i.querySelector("age");
  let profNode = i.querySelector("prof");
  let langAttr = nameNode.getAttribute("lang");
    
  student.name = nameNode.textContent;
  student.age = Number (ageNode.textContent);
  student.prof = profNode.textContent;
  student.lang = langAttr;

  result.push(student);
})

console.log(result);






















































