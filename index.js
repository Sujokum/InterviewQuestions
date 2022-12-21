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

// ------------------------ Union From String End 