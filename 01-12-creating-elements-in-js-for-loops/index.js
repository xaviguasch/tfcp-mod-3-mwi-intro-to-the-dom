var powerRangers = [
  'Jason Lee Scott',
  'Kimberly Hart',
  'Zack Taylor',
  'Trini Kwan',
  'Billy Cranston',
]

var rangersList = document.getElementById('rangers')
// var newName = document.createElement('li')
// newName.textContent = powerRangers[0]
// rangersList.append(newName)

for (let i = 0; i < powerRangers.length; i++) {
  // let newName = document.createElement('li')
  // newName.textContent = powerRangers[i]
  // rangersList.append(newName)

  rangersList.innerHTML += `<li>${powerRangers[i]}</li>`
}
