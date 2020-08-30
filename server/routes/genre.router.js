const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  query = `SELECT * FROM "genres"
  ORDER BY "id";`;
  pool.query(query).then(result => {
    res.send(result.rows)
  }).catch(error => {
    console.log('error in genre GET:', error)
    res.sendStatus(500)
  })
});

module.exports = router;