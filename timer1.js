process.argv.shift();
process.argv.shift();
let secondsArray = process.argv;

secondsArray.sort(function(a, b) {
  return a - b;
});

let timeFr = 0;

for (const seconds in secondsArray) {
  secondsArray[seconds] *= 1000;
  setTimeout(() => {
    process.stdout.write('.');
  }, timeFr += secondsArray[seconds]);
}