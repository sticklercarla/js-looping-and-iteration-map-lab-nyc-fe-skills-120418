// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(name => name.toLowerCase())
}
function nameToAttributes(drivers) {
  return drivers.map(name => ({firstName: name.split(' ')[0], lastName: name.split(' ')[1]} ));
}

// [{
//   name: 'hi',
//   location: 'NYC'
// },
// {
//   name: 'bye'
// }]

// ['hi is from NYC', ]
function attributesToPhrase(drivers) {
  return drivers.map(driver => (driver.name +" is from "+ driver.hometown))
}