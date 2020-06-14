const express = require('express');
const router = express.Router();

/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

let data={}
let counter=0

/* add the value in the body to the list associated to the key */
router.post('/add/:key', (req, res, next) => {
  const key = req.params.key
  const val = req.body.val
  let vals = data[key] || []
  val['id']=counter
  counter++
  vals = vals.concat(val)
  data[key]=vals
  console.log(JSON.stringify(req.body,null,2))
  res.json(data[key]);
});

router.get('/add/:key/:val', (req, res, next) => {
  const key = req.params.key
  const val = req.params.val
  let vals = data[key] || []
  vals = vals.concat(val)
  data[key]=vals
  res.json(data[key]);
});

// set the value associated to the key from the parameter
router.get('/set/:key/:val', (req, res, next) => {
  const key=req.params.key
  const val = req.params.val
  const oldVal = data[key]
  data[key]=val
  res.json(oldVal);
});

// set the value associated to the key from the body
router.post('/set/:key', (req, res, next) => {
  const key=req.params.key
  const val = req.body.val
  const oldVal = data[key]
  data[key]=val
  res.json(oldVal);
});

// get the value associated to the key
router.get('/get/:key', (req, res, next) => {
  const key=req.params.key
  res.json(data[key]);
});

// reset the value associated to the key t
router.get('/reset/:key', (req, res, next) => {
  const key=req.params.key
  const old=data[key]
  if (old) { delete data[key]}
  res.json(data[key]);
});

router.get('/dump', (req,res,next) =>{
  res.json(data)
})

module.exports = router;
