// const next = (value: any) => console.log("next:", value);
// next("hello world");

// import value from "*.json";

// interface Observer{
//   next: (value: any) => void,
//   error: (value: any) => void,
//   complete: () => void
// }

// const observer: Observer = {
//   next: (value: any) => console.log("next:", value),
//   error: (err: any) => console.log("error:", err),
//   complete: () => console.log("complete")
// };

// observer.next("Something");

import { oPerson, Person } from './sub';

// Object type
oPerson.fullName = 'Theerapat Singprasert';
console.log(oPerson);
console.log(oPerson.fullName);

// Class type
let bai: Person = new Person('Theerapat', 'Singprasert');
console.log(bai);
console.log(bai.fullName);
console.log(`${bai.getFullName()} (by method type)`); //Not Recommended

function asyncAction() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async is done!");
      reject('Rejected!');
    }, 1500);
  });
  return promise;
}

asyncAction().then(function(success) { 
    console.log(success); 
}) 
.catch(function(error) { 
   // error handler is called
   console.log(error); 
});
