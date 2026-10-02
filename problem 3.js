function countdown(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
console.log(countdown(1)); // [1]
console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]
