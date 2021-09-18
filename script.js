// This is my code for the CodeSmith Prep program's technical communication video assignment.
// I will code the Collatz algorithm.

// Collatz algorithm
function collatz(n){
  // Use recursion for Collatz algorithm.
  // Base case: if n is 1, then return n.
  if(n === 1){
    return n;
  } else{
    if(n%2 === 0){ // Recursive step: if even, then return n/2
      console.log(n/2);
      return collatz(n/2);
    } else{ // if n is odd, return 3n+1
      console.log(3*n+1);
      return collatz(3*n+1);
    }
  }
}

collatz(3);