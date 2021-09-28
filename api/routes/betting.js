const { Router } = require('express')

const router = Router()

// Mock Sports
const sports = [
  { id: 1, name: 'Fudbal' },
  { id: 2, name: 'Kosarka' },
  { id: 3, name: 'Tenis' }
]

/* GET sports listing. */
router.get('/sports', function (req, res, next) {
  res.json(sports)
})

/* GET sports by ID. */
router.get('/sports/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  let foundSport = sports.find(sport => sport.id === id)
  if (foundSport) {
    res.json(foundSport)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router