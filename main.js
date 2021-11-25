const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let people;

console.log("몇 명 먹겠느냐??");

rl.on("line", (input) => {
  if (count === 0) {
    people = +input;
  }

  rl.close();
}).on("close", function () {
  if (people === 1 || people === 0) {
    console.log(`당연히 ${people}마리 먹어야지;;`);
  } else {
    function fibonacci(n) {
      let newArr = [0, 1];

      let fib = (n) => {
        if (newArr[n] !== undefined) {
          return newArr[n];
        }
        newArr[n] = fib(n - 1) + fib(n - 2);
        return newArr[n];
      };

      return fib(n);
    }
    let newNumb = fibonacci(people);
    console.log(`당연히 ${newNumb}마리 먹어야지`);
  }
});
