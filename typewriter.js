const sentence = "hello there from lighthouse labs";
let count = 0;

for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, 500 * count);
  count++; // <= 1s delay to make it noticeable. Can dial it down later.
}

setTimeout(() => {
  // print the char here
  console.log();
}, 500 * sentence.length);