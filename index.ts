//https://jsonplaceholder.typicode.com/users
class utils {
  load() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
  } 
}

async function draw() {
  const util = new utils()
  const response = await util.load()
  console.log(response)
}

draw()
