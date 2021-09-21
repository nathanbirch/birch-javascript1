let city = 'Chicago'; // string
let population = 1000000; // number
let cityData = {
  // object
  name: 'Rexburg',
  population: 60000,
};
let cities = ['Rexburg', 'Chicago', 'Spokane']; // array
function displayCity(cityToDisplay) {
  // function
  console.log(cities[cityToDisplay]);
}

console.log(city);
console.log(population);
console.log(cityData);
console.log(cities);
displayCity(0);

var i = 1;
while (i <= 5) {
  console.log('The number is ' + i + '');
  i++;
}

for (var i = 1; i <= 100; i += 2) {
  console.log('The number is ' + i + '');
}

for (var i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

for (city in cities) {
  console.log(city);
}
