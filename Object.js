let src = {
    age: 12,
    wt:68,
    ht:56,

}
// console.log(obj);
// //change the color of the object in the run time 
// obj.col= "white ";
// console.log(obj);
     
     // clone the sourse and destination of the object 
// let dest = {...src};
// src.age = 34;
// console.log("SRC" ,src);
// console.log("Dest",dest);


let dest = {};
for(let key in src){
  let newKey = key ;
  let newValue = src[key];

  //insert newKey and the value in the dest 
  dest[newKey] = newValue;
}
console.log ("SRC",dest);
console.log ("dest",src);







