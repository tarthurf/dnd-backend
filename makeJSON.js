const fs = require('fs');
const fetch = require('node-fetch')

const getData = () => {
  fetch("https://www.dnd5eapi.co/api/spells")
  .then(res => res.json())
  .then(data => {
    fs.appendFile("5eAPI.json", JSON.stringify(data), err => {if (err) throw err})
  })
}

getData();