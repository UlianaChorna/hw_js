//TASK 1

// What is the last value alerted by this code? Why?
// let i = 3;
// while (i) {
//   alert( i-- );
// }

// SOLUTION: 1


// TASK 2

// For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

// The prefix form ++i:

// let i = 0;
// while (++i < 5) alert( i );
// The postfix form i++

// let i = 0;
// while (i++ < 5) alert( i );

// SOLUTION:  This loops alert don't have the same values
// first has four alerts => 1,2,3,4
//  second has five alerts 1,2,3,4,5


// TASK 3
// Both loops alert same values or not?

// The postfix form:

// for (let i = 0; i < 5; i++) alert( i );
// The prefix form:

// for (let i = 0; i < 5; ++i) alert( i );

//  SOLUTION: Yes

// TASK 4
// Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// TASK 5
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
  alert( `number ${i}` );
  i++;
}


// TASK 6
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

let num;

do {
  num = prompt("Please write a number greater than 100?", 0);
} while (num <= 100 && num);

// TASK 7

// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.

let n = 10;

next:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue next; 
  }

  alert(i); 
}