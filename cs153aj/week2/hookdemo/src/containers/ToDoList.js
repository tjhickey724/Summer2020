import React, {useState} from 'react';

const  ToDoList = ({data}) => {
  // here is where we keep track of the todo list
  const [items,updateItems] = useState([])

  // here is where we keep track of the values in the form
  const [name,setName] = useState("")
  const [description, setDescription] = useState("")

  // this is the action when the submit button is pushed
  const addItem = (event) => {
    console.log('adding item ')
    console.dir(event)
    const item = {id:items.length, name:name, description:description, complete:false}
    updateItems(items.concat(item))
    event.preventDefault()
  }

  // these are called when the form elements are modified
  const updateName = event=> setName(event.target.value)
  const updateDescription = event => setDescription(event.target.value)

  // handle the action when an item is clicked/completed
  let flipItem = item => (event) => {
    item.complete=!item.complete
    let newitems = items.map(x => (x.id==item.id?item:x))
    updateItems(newitems)
  }

  return (
   <>
     <h1> ToDo List </h1>

     <ul>
       {items.filter(item=>!item.complete).map(item => (

         <li key={item.id}>
           <input type="checkbox"
                  onChange={flipItem(item)}
                  name={"complete"+item.id} value={!item.complete} />
           {item.name} : {item.description}
         </li>

       ))}
     </ul>
     <form onSubmit={addItem}>
       <h2>New todo</h2>
       name: <input type="text" name="name" onChange={updateName}/><br />
       description: <input type="text" name="description" onChange={updateDescription} /><br />
       <input type="submit" value="add item to todo list" />
     </form>

     <h2>Here is the items JSON object</h2>
     <pre>
       {JSON.stringify(items,null,2)}
     </pre>
   </>
 );
}

export default ToDoList;
