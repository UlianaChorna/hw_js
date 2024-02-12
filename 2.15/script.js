// task1

// solution: no difference


//TASK 2

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// 1.Using a question mark operator ?
// 2.Using OR ||

// SOLUTION

// 1
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

// 2
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}


// TASK 3
// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// TASK 4

// Write a function pow(x,n) that returns x in power n. Or, in other words,
//  multiplies x by itself n times and returns the result.

function pow(x, n) {
  let result = x;

  if (n < 1) {
    return 'n should be integer'
  } else {
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }

}

console.log(pow(2,3))