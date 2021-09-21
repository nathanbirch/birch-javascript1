window.onload = (event) => {
  // WHILE LOOP EXERCISE
  let display = '';
  let i = 1;
  while (i <= 100) {
    display += i + '<br>';
    i++;
  }
  document.getElementById('while-output').innerHTML = display;
  document.getElementById('while-output').style.color = 'red';

  // FOR LOOP EXERCISE
  display = '';
  for (let i = 1; i <= 100; i++) {
    display += i + '<br>';
  }
  document.getElementById('for-output').innerHTML = display;

  // FOR LOOP EVEN NUMBERS
  display = '';
  for (let i = 2; i <= 100; i += 2) {
    display += i + '<br>';
    document.getElementById('evens-output').innerHTML = display;
  }

  // ARRAY LOOP EXERCISE
  let babyNames = [
    'Liam',
    'Noah',
    'Oliver',
    'Elijah',
    'William',
    'James',
    'Benjamin',
    'Lucas',
    'Henry',
    'Alexander',
  ];
  display = '';
  for (let babyName of babyNames) {
    display += babyName + '<br>';
  }
  document.getElementById('array-output').innerHTML = display;
};
