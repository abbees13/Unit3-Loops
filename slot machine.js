let m1 = 3;
let m2 = 10;
let m3 = 4;
let play = 0;
let count = 0;

function Gamble(q) {
  while (q > 0) {
    if (play === 0) {
      m1++;
      play++;
      count++;
      q--;
      if (m1 % 35 === 0) {
        q = q + 30;
      }
    } else if (play === 1) {
      m2++;
      play++;
      count++;
      q--;
      if (m2 % 100 === 0) {
        q = q + 100;
      }
    } else if (play === 2) {
      m3++;
      play++;
      count++;
      q--;
      if (m3 % 10 === 0) {
        q = q + 9;
      }
    } else if (play === 3) {
      play = 0;
    }
  }
  console.log(`Martha plays ${count} times before going broke`);
}

console.log(Gamble(48));
