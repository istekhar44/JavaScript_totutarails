//Making the class and the Object
// let obj ={
//     name : "Md Istekhar Alam",
//     Class : "B.Tech",
//     height : "6 feet ",
//     greet :function(){
//         for(let i=0; i<=20 ;i++){
//             console.log(i);
//         }
//     }
   
// };
// console.log(obj);
// obj.greet();


// Creating the array
// let arr = [1,2,4,6,7];
//construct an Array 
// let brr = new Array ('love ',1, true);
// brr.push('Babbar');
// brr.pop('babbar');
// brr.slice(1,2,'hellow');

// //number into number 
// let array = ['hellow',20,30,40,50];
// let ans= array.map((number)=>{
//    return number*number; 
// })
// console.log(ans);


//increment and the decrement of the digit in the array
// let arr = [10,20,30,40,];
// let ans = arr.map((num)=>{
//     return num+2;
    
// })
// console.log(ans);


// filter function is ued to filter any number either odd or Even
// let arr = [3,5,8,9,34,67,12,56,78];
// //in am making the function give the name of the function ans
// let ans = arr.filter((number )=>{
//     if(number %2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);

//filter the vlue in the 
// let arr = [1,2,'love','kunal',null];
// let ans = arr.filter((value)=>{
//     if (typeof value === "string"){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);


//sort in the acending order
//  let arr = [3,5,8,9,34,67,12,56,78];
// arr.sort((a,b)=> a-b);
// console.log(arr);

//Short the array in the decinding order
// let brr = [3,5,8,9,34,67,12,56,78];
// brr.sort((a,b)=> b-a);
// console.log(brr);


// To perform the action in the each element of the array 
let arr = [3,5,8,9,34,67,89,100]
arr.forEach((value,index)=>{
    console.log("Number", value , "Index" , index)
})
console.log("arr");






