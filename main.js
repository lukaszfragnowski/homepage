const firstName = "Lukasz";
const age = 37;

console.log(firstName);
console.log(age);

console.log(`cześć, nazywam się ${firstName} i mam ${age} lat.`);


const heading = document.querySelector('.company-name--js');

heading.innerHTML = `cześć, nazywam się ${firstName} i mam ${age} lat.`;