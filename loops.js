// 1. Print "love babbar" 10 times
let ballu = 'love babbar';
for (let i = 1; i <= 10; i++) {
    console.log(ballu);
}

// 2. Print "hellow" 10 times using do...while
let hellow = 'print the loop';
let k = 0;
do {
    console.log(hellow);
    k++;
} while (k < 10);

// 3. Printing counting from 1 to 9
for (let i = 1; i < 10; i++) {
    console.log(i);
}

// 4. Print reverse counting from 5 to 1
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// 5. Triangle pattern (simple left-aligned)
let num1 = 5;
let pattern1 = '';
for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= i; j++) {
        pattern1 += '*';
    }
    pattern1 += '\n';
}
console.log(pattern1);

// 6. Left triangle pattern (same as above, avoiding variable re-declaration)
let num2 = 5;
let pattern2 = '';
for (let i = 1; i <= num2; i++) {
    for (let j = 1; j <= i; j++) {
        pattern2 += '*';
    }
    pattern2 += '\n';
}
console.log(pattern2);

// 7. Use of `continue` in a loop (skips iteration when i == 3)
for (let i = 1; i <= 4; i++) {
    if (i == 3) {
        continue; // skip iteration
    }
    console.log(i); // no need for else, this runs if continue doesn't trigger
}
