// this branch has two working unit tests. One of which are asynchornous.
// See assertions or breaking-integration branches to see printResult function
function multipliesByFive(num) {
  if (typeof num !== "number") {
    throw new Error("Please provide a number!");
  }
  return num * 5;
}

function multipliesByFiveSlowly(num) {
  if (typeof num !== "number") {
    throw new Error("Please give an input");
    //   reject(new Error('Please give an input'));
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num * 5;
      resolve(result);
    }, 500);
  });
}

module.exports = {
  multipliesByFive,
  multipliesByFiveSlowly
};
