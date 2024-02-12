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