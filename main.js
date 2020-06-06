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

//praca domowa (zmiana treści htmla za pomocą js)

function createContent(querySelectorContent, content) {
  const pracaDomowa = document.querySelector(querySelectorContent);
  pracaDomowa.innerHTML = content;
}

createContent('.empty--js', 'dowolny jakby tekst uruchomiony w funkcją');


//praca domowa (zabawa funkcjami, zwykła funkcja, fat arrow)

function greetings(nejm,ajdż) {
  console.log(`Maj nejm is ${nejm} end aj hew ${ajdż} jers old`);
}

greetings('lukasz',36);

const nejm2 = "lukasz2";
const ajdż2 = 17;

const greetings2 = (nejm2,ajdż2) => {
  console.log(`mam na imię ${nejm2} i mam ${ajdż2} lat`);
}

greetings2('Albert',125);

//poniżej przykładowy obiekt i potem wywołoanie funkcji z danymi z obiektu

const man = {
  name: 'lukasz z obiektu',
  age: 30,
}

greetings2(man.name,man.age);

// zabawa z logiką js

if ('Java' != 'JavaScript') {
  console.log('Java to nie JavaScript')
}

// oprogramowanie testowego przycisku
// pobieramy przycisk
// tworzymy funkcję, która po kliknięciu wykonan akcję
// uruchamiamy event listerera, który uruchomi funkcję po akcji click

const button = document.querySelector('.action--js');

function myClick() {
  // console.log('kliknąłeś');
  const heading = document.querySelector(".main__header--js");
  heading.innerHTML = 'Fukasz Łrągnowski<br />domowa strona testowa';
  heading.classList.toggle('klasa-z-js');
}

button.addEventListener('click', myClick)

// funkcję myClick możemy też od razu wrzucić w buttom.addEventListener, będzie miało to format:
// button.addEventListener('click', () => {
//  const heading = document.querySelector(".main__header--js");
//  heading.innerHTML = 'Fukasz Łrągnowski<br />domowa strona testowa';
// });

// hamburger

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});

