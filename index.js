//----------   Hello InterView Question Answer here 


//----------------------------------------------------- Question No 1 : 
// How to find the intersection and union ? 


//-------------------------- Intersection ---------------------- 

// eq: 1 =>
// const arr1 = [1 , 2 , 3 , 4];
// const arr2 = [3 , 4 , 2 , 7];


// Intersection Here : 

// const intersection = arr1.filter(ele=>arr2.includes(ele));
// console.log(intersection);

// OutPut => 
// [2 , 3 , 4]


//-------------------------- Intersection End ---------------------- 

//-------------------------- Union Start ---------------------- 
// const arr1 = [1 , 2, 3 , 4 ,5];
// const arr2 = [3 , 4 , 5 , 6 , 7];

// const union = [...new Set([...arr1 , ...arr2])];
// console.log(union)


// Output => 
// [1 ,2 , 3 , 4 , 5 , 6 , 7]

//-------------------------- Union End ---------------------- 


//------------------------------------------------ Question No 2 : 
// How to find Intersection and union from string


// ------------------------ InterSection From String Start
// const a = "123456"
// const b = "345678"

// // Intersection from string 

// const st1 = a.split('');
// const st2 = b.split('');

// const Intersection = st1.filter(ele => st2.includes(ele));
// console.log(Intersection)

// ------------------------ InterSection From String End

// ------------------------ Union From String Start 

// const st1 = '1234567'
// const st2 = '3456789'

// const arr1 = st1.split('');
// const arr2 = st2.split('');

// const Union = [...new Set([...arr1 , ...arr2])];
// const tostring = Union.join('').toString();


// console.log(tostring)


// ------------------------ Union From String End 




// ------------------------------------ Question No  3 

// What is replaceAll();
// Answer  => it will replace a word from string ;

// const info = 'my name is Suneel Sujo and my real name is Sunail Sujo';

// const change = info.replaceAll('Sujo' , 'Ahmed');
// const change2 = info.replace(/Sujo/g , 'Ahmed');
// console.log(change);
// console.log(change2);



// ---------------------------- Question No 4 :
// What is the Output Of this Code 

// const logNumber = ()=>{
//     console.log(1);
//     setTimeout(function(){
//         console.log(2);
//     },1000)
//     setTimeout(function(){
//         console.log(3);
//     },0)
//     console.log(4);
// }
// logNumber()

// Output => 
// 1
// 4
// 3
// 2



// ----------------------------------- Question No 5 : 
// Did this equation is true ..?


// const a = 400.4 === 200.2 * 2;   --------- True
// const b = 900.9 === 300.3 * 3;   ---------- False

// console.log(a)
// console.log(b)




// ----------------------------------- Question No 6 : 
// What are the data type of object and array ?

// Answer : =>
// They Both are Objects;

// const a = {};
// const b = [];

// console.log(typeof(a))
// console.log(typeof(b))



// ----------------------------- Question No 7 : 
// How to validate is this is Array or not ?

// Answer 
// const b = [];

// const c = Array.isArray(b);
// console.log(c)



// -------------------------- Question No 8 : 
// What is the output of this equstion ?

// Eq-1 

// let myName = 'Sujo';
// let nextName = myName;

// myName = 'Ahmed'

// console.log(myName);
// console.log(nextName);


// Output =>

// Ahmed 
// Sujo

// Eq-2


// const obj1 = {
//     name : 'Sunail',
//     email : 'sunail@gmail.com'
// }

// const obj2 = obj1 ;

// obj2.name = 'Sujo';


// console.log(obj1)
// console.log(obj2)



// ----------------------------------- Question No : 9
// What is the Output of this problem?


// let arrName = [
//     {
//         name : 'Sunail',
//         email : 'sunail@gmail.com'
//     },
//     {
//         name : 'Sujo',
//         email : 'Sujo@gmail.com'
//     }
// ]


// const checkIndex = arrName.indexOf({
//     name : 'Sujo',
//     email : 'Sujo@gmail.com'
// })

// console.log(checkIndex);



// Output =>
// -1 



// --------------------------------------- Question No 10 
// 







