/*
  todo.js -- Router for the ToDoList
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

/* add the value in the body to the list associated to the key */
router.post('/',
  isLoggedIn,
  async (req, res, next) => {
      const todo = new ToDoItem(
        {item:req.body.item,
         createdAt: new Date(),
         complete: false,
         userId: req.user._id
        })
      await todo.save();
      res.redirect('/todo')
});

router.get('/remove/:itemId',
  isLoggedIn,
  async (req, res, next) => {
      console.log("inside /todo/remove/:itemId")
      await ToDoItem.remove({_id:req.params.itemId});
      res.redirect('/toDo')
});


// get the value associated to the key
router.get('/',
  isLoggedIn,
  async (req, res, next) => {
      res.locals.items = await ToDoItem.find({userId:req.user._id})
      res.render('toDoList');
});


module.exports = router;
