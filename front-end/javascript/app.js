// let name = 100;
// console.log(name)

// const sid = 1000000000

// sid is a precious

// let inbo = 100

// let inbox = 'lol';
// inbox++;
// console.log(typeof inbox);

// let inbox = null;

// let inb = true;

// let in = Symbol();

// const user = "sid";
// const message = `Welcome to our website ${user} you are our "first's user"`;

// // console.log(message);

// let age = 23;

// let bank = 100;

// if (age >= 18) {
//   console.log("you can enter");
// } else if (bank > 80) {
//   console.log("you are rich");
// } else {
//   console.log("you cant enter");
// }
// const age = 10;

// if (age) {
//   console.log("This value is true");
// } else {
//   console.log("this value is false");
// }

// function greet(text) {
//   console.log("welcome to our page " + text);
// }

// function signup() {
//   let name = prompt("Enter your name :");
//   greet(name);
// }

// signup();
// let tag = {
//   name: "sid",
//   age: 25,
//   married: false,
//   greet: function () {
//     console.log("hello there !! " + tag.name);
//   },
// };

// console.log(tag.greet);
// tag.greet();

// let lis = ["sid", "nixon", "python"];

// lis.push('new');

// console.log(lis);

// let fruit = prompt('Enter a fruit name: ')

// switch (fruit) {
//   case 'banana':
//     console.log('i love banana');
//     fn = 1;
//     break;
//   case 'apple':
//     console.log('i love apples too !!!');
//     fn = 2;
//     break
//   case 'kiwi':
//     console.log('i have always loved the taste of kiwi');
//     fn = 3;
//     break;
//   default:
//     console.log('orange is both sweet and juicy')
//     fn = 4;
//     break;
// }

// let fruit = prompt('Enter a fruit name: ')
// word = fruit.toLowerCase()
// switch (word) {
//   case 'banana':
//     alert('i love banana');
//     fn = 1;
//     break;
//   case 'apple':
//     alert('i love apples too !!!');
//     fn = 2;
//     break
//   case 'kiwi':
//     alert('i have always loved the taste of kiwi');
//     fn = 3;
//     break;
//   default:
//     alert('orange is both sweet and juicy')
//     fn = 4;
//     break;
// }

// for (let a = 0; a < 100; a++) {
//   if (a === 20) {
//     console.log("congrats you hit 20");
//     continue;
//   }
//   console.log(a);
// }

// let text = [
//   "singing in the rain",
//   "coding in the dark",
//   "deep learning is booming",
//   "vision apps",
//   "am cool",
//   "2020 is a joke",
// ];

// for (i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

// for (let i of text) {
//   console.log(i);
// }

// for (let i of text) {
//   if (i === "am cool") {
//     console.log("stopped by for loop");
//     break;
//   }
//   console.log(i);
// }

// text.forEach(function (letter, index) {
//   console.log(letter, index);
// });
// let user = {
//   name: "sid",
//   age: 23,
//   job: "student",
//   mission: "to create a mark",
// };

// for (i in user) {
//   console.log(user[i]);
// }
// let i = 10;

// while (i < 30) {
//   console.log(i);
//   i++;
// }

// function guessingGame() {
//   rand = Math.floor(Math.random() * 11);
//   let guess;

//   do {
//     guess = prompt("Enter your guess: ");
//     if (guess > rand) {
//       console.log("Your guess is too high");
//     } else {
//       console.log("your guess is too low");
//     }
//   } while (guess != rand);
//   console.log("Congrats, you have guessed it !!!");
// }

// guessingGame();
// let food = "yummy";
// let age = 10;
// var num = 0;

// function first() {
//   let food = "burger";
//   var num = 1;
// }
// console.log(food, num);
// if (true) {
//   let food = "cheese";
//   let age = 20;
//   var num = 3;
// }
// console.log(food, age, num);
// const head = document.getElementsByTagName('h2')
// const name = document.getElementsByClassName('item')
// const id = document.getElementById('submit')
// console.log(id)
// console.log(name.length)

// const head = document.querySelectorAll('h2')
// const li = document.querySelectorAll('#submit')
// console.log(li)

// const id = document.querySelector('#list')

// console.log(id.childNodes)
// console.log(id.children)


// const name = document.querySelectorAll('.item')

// for (i of name) {
//     console.log(i)
// }

// name.forEach(function (a) {
//     console.log(a)
// })



// const cl = document.getElementsByClassName('item')
// const fin = document.getElementById('clas')
// const zip = document.getElementsByClassName('hello')[0]

// const added = document.createElement('li')

// added.classList.add('item')

// added.innerText = 'item 10'

// const another = document.createElement('li')

// another.classList.add('item')

// another.innerText = 'item new'

// fin.appendChild(added)

// fin.appendChild(another)


// zip.innerText = cl.length;



// const lis = document.querySelector('#clas');
// const child = lis.children;
// const zip = document.querySelector('.hello');


// const new1 = document.createElement('li');
// new1.classList.add('item');
// new1.innerText = 'added item';

// const new2 = document.createElement('li');
// new2.classList.add('item');
// new2.innerText = 'added new';

// lis.appendChild(new1)
// lis.appendChild(new2)

// zip.innerText = child.length

// console.log(child)

const button = document.querySelector("#submit");
const to = document.querySelector('#todo');
const it = to.children;
const num = document.querySelector('.nr b');
// const fum = document.querySelector('.main');
button.addEventListener("click", even);


function even() {
    e.preventDefault();
    const newit = document.createElement('li');
    newit.classList.add('item');
    newit.innerText = `item ${it.length +1}`;
    to.appendChild(newit);
    num.innerText = it.length;
    newit.addEventListener('click', del);
};

// function del() {
//     console.log('deleted');
// };
function del(e) {
    // console.log(e.target);
    e.stopPrapagation()
    e.target.remove()
};

to.addEventListener('click', function () {
    to.classList.toggle('fade')
})
// button.addEventListener('click', function () {
//     fun.classList.toggle('.spec');
// });

// localStorage.setItem('todo', 'become a python wizard')

// sessionStorage.setItem('todo', 'feed the cat')

// localStorage.clear()


const lis = {
    'one': 'am great',
    'two': 'lord shiva is the best',
    'three': 'mom is gift from god'
}

localStorage.setItem('tod', JSON.stringify(lis));

const ret = JSON.parse(localStorage.getItem('tod'));

console.log(ret);