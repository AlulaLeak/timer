process.argv.shift();
process.argv.shift();
let times = process.argv;

times.sort(function(a, b) {
  return a - b;
});

let timeFr = 0;

for (const item in times) {
  times[item] *= 1000;
  setTimeout(() => {
    process.stdout.write('.');
  }, timeFr += times[item]);
}