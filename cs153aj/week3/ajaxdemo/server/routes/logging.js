const express = require('express');
const router = express.Router();

/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

router.use((req,res,next) => {
  console.log(`LOGGING: ${req.url
      }: ${JSON.stringify(req.params,null,2)
      }:: ${JSON.stringify(req.body,null,2)
      }:: ${new Date()}`)
  next()
})

module.exports = router;
