const firstName = "Lukasz";
const age = 37;

console.log(firstName);
console.log(age);

console.log(`cześć, nazywam się ${firstName} i mam ${age} lat.`);



function calculate(myNumber) {
  console.log(`dostałam ${myNumber}`);
  return myNumber*7;
}

const myResult = calculate(1);
console.log(myResult);


function createContent(querySelectorContent, content) {
  const pracaDomowa = document.querySelector(querySelectorContent);
  pracaDomowa.innerHTML = content;
}

createContent('.empty--js', 'dowolny jakby tekst uruchomiony w funkcją');

console.log(console);
console.log(typeof console.log); 