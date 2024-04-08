const express = require("express")
const app = express()
const PORT = 3000

const puppies = [
  { name: "Buddy", color: "Brown", owner: "Alice" },
  { name: "Daisy", color: "White", owner: "Bob" },
  { name: "Max", color: "Black", owner: "Carol" },
  { name: "Rosie", color: "Golden", owner: "David" },
  { name: "Charlie", color: "Spotted", owner: "Emily" },
]

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/api/v1/pets", (req, res) => {
  res.send(puppies)
})

app.get("/api/v1/pets/name/:name", (req, res) => {
  const puppyName = req.params.name
  const foundPuppyName = puppies.find(puppy => {
    return puppyName === puppy.name
  })
  res.send(foundPuppyName)
})

app.get("/api/v1/pets/owner", (req, res) => {
  const ownerName = req.query.owner
  const foundOwner = puppies.filter(puppy => {
    return ownerName === puppy.owner
  })
  res.send(foundOwner)
})

app.listen(PORT, () => {
  console.log("listening on port 3000")
})
