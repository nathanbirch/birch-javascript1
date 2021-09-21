function getMotto() {
  return prompt('Please enter your favorite motto.');
}

function getCount() {
  return parseInt(prompt('How many times do you want to see your motto?'));
}

function getReason() {
  return prompt('Why is this your favorite motto?');
}

function printMotto(count, motto, reason) {
  //   for (let i = 1; i <= count; i++) {
  //     console.log(i + '. ' + motto);
  //   }

  let i = 1;
  while (i <= count) {
    console.log(i + '. ' + motto);
    i++;
  }
  console.log(
    'Wow! You printed that ' +
      count +
      ' times. This is your favorite quote because ' +
      reason +
      '.'
  );
}

let motto = getMotto();
let count = getCount();
let reason = getReason();

printMotto(count, motto, reason);
