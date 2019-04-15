// /**
//  * Object Destruction
//  */
// const person = {
//     name: 'Iohan',
//     age: '25',
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// /* Bad way */
// // const age = person.age; 
// // const name = person.name;

// /* Best way */
// const {name: firstName = 'anonymus',age} = person; // define um valor default para uma propiedade
// // console.log(`${firstName} is ${age}`);

// if(person.location.city && person.location.temp){
//     // console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }

// const {temp: temperature,city} = person.location; // renomeia os objetos
// if(temperature && city){
//     // console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//         name: 'Penguin'
//     }
// }
// // Penguin or Self-Published

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log('publisherName: ',publisherName);

/**
 * Array Destruction
 */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania','19147'];
console.log(`You are in ${address[1]} - ${address[2]}`);

const [street, city, state, zip] = address;
// const [, city, state, ] = address; totalmente valido.
console.log(`You are in ${city} - ${state}`);

const item = ['Coffe (hot)','$2.00','$2.50','$2.75'];
const [coffeItem,,mediumPrice] = item;
console.log(`A medium ${coffeItem} costs ${mediumPrice} `);