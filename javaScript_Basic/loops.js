// print the love babbar 10 times 

let ballu='love babbar';
for(let i = 1 ; i < 10 ; i++){
    console.log(ballu);
}

// print the hellow ten times using the do while 
let hellow = 'print the loop';
let i=0;
do{
    console.log(hellow);
    i++;
}while(i<10);
    console.log(hellow)

// printing the counting 

for(let i= 1; i<10 ; i++){
    console.log(i);
}

//print the reverse counting
for(let i =5; i >0; i--){
    console.log(i);
}

// printing the pattern type question (triangel pattern)
let num=5;
let pattern =' ';
for(let i = 1 ; i<=num ; i++){
    for(let j = 1 ; j <= i ; j++){
        pattern += '*';
    }
    pattern += '\n';
}
console.log(pattern);

//2nd pattern for the (left triangle)







//use of continue in the loop  (which skip the itration)
for(let i = 1; i<=4 ;i++){
    if (i==3){
        continue;
    }else{
        console.log(i);
    }
}

//

