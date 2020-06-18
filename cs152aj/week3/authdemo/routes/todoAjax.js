/*
  todoAjax.js -- Router for the ToDoList
  used in Ajax calls from the client
*/
const express = require('express');
const router = express.Router();
const ToDoItem = require('../models/ToDoItem')


/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
}

// get the value associated to the key
router.get('/',
  async (req, res, next) => {
      res.locals.items = await ToDoItem.find({userId:req.user._id})
      res.render('toDoListClient')
});

// get the value associated to the key
router.get('/items',
  async (req, res, next) => {
      let items = await ToDoItem.find({userId:req.user._id})
      res.json(items)
});

/* add the value in the body to the list associated to the key */
router.post('/',
  async (req, res, next) => {
      console.log(`req.body=${JSON.stringify(req.body)}`)
      const todo = new ToDoItem(
        {item:req.body.item,
         createdAt: new Date(),
         complete: false,
         userId: req.user._id
        })
      let item = await todo.save();
      res.json(item)
});

router.get('/testing', (req,res) => res.json(['it','works']))

router.post('/remove',
  async (req, res, next) => {
    try {
      let itemId = req.body.itemId
      console.log("inside /todo/remove/:itemId")
      let result = await ToDoItem.remove({_id:itemId});
      res.json(result)
    }catch(e){
      next(e)
    }
});





module.exports = router;
