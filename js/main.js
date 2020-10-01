let cities ={
  Riga: 'Rīga'
}

var obj = {}
var laiks = document.getElementById('laiks')

fetch('http://127.0.0.1/api/inbox/')
  .then(res => res.json())
  .then(data => callback(data))
  .catch(e => console.log(e))

  function callback(data) {
    console.log(data)
    var out = `<h5 class="center">${data.geoip.country_name}, ${cities[data.geoip.city] || data.geoip.city}</h5><h6 class="center">${data.weather.currTemp}&#8451</h6>`
    laiks.innerHTML = out

}

var majasd0bj = [
  {name:'Ann', notes: [3, 5, 8]},
  {name:'Jeanny', notes: [4, 6, 9]},
  {name:'John', notes: [2, 7, 9]},
  {name:'Max', notes: [1, 5, 9]},
]

var out = ''
out += `<h3>${majasd0bj[0].name}</h3>`
out += `<ul>`
out += `<li>Note 1: ${majasd0bj[0].notes[0]}</li>`
out += `<li>Note 2: ${majasd0bj[0].notes[1]}</li>`
out += `<li>Note 3: ${majasd0bj[0].notes[2]}</li>`
out += `</ul>`
out += `<h3>${majasd0bj[1].name}</h3>`
out += `<ul>`
out += `<li>Note 1: ${majasd0bj[1].notes[0]}</li>`
out += `<li>Note 2: ${majasd0bj[1].notes[1]}</li>`
out += `<li>Note 3: ${majasd0bj[1].notes[2]}</li>`
out += `</ul>`
out += `<h3>${majasd0bj[2].name}</h3>`
out += `<ul>`
out += `<li>Note 1: ${majasd0bj[2].notes[0]}</li>`
out += `<li>Note 2: ${majasd0bj[2].notes[1]}</li>`
out += `<li>Note 3: ${majasd0bj[2].notes[2]}</li>`
out += `</ul>`
out += `<h3>${majasd0bj[3].name}</h3>`
out += `<ul>`
out += `<li>Note 1: ${majasd0bj[3].notes[0]}</li>`
out += `<li>Note 2: ${majasd0bj[3].notes[1]}</li>`
out += `<li>Note 3: ${majasd0bj[3].notes[2]}</li>`
out += `</ul>`


document.getElementById('majasdarbs').innerHTML = out

