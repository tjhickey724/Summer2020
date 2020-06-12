import React, {useState} from 'react';
import useStickyState from '../useStickyState';

const  ToDoList = ({data}) => {
  // here is where we keep track of the todo list
  const [items,updateItems] = useStickyState(data,"todolist")



  // here is where we keep track of the values in the form
  const [name,setName] = useState("")
  const [description, setDescription] = useState("")

  // this is the action when the submit button is pushed
  const addItem = (event) => {
    // we need to generate a unique id for the new items
    // so we get the id of the last item and add 1
    const lastId = items.length==0?0:items[items.length-1].id
    const item = {id:lastId+1, name:name, description:description, complete:false}
    updateItems(items.concat(item))
    document.getElementById('name').value = ""
    setName("")
    document.getElementById('description').value = ""
    setDescription("")

    event.preventDefault()
  }

  // these are called when the form elements are modified
  const updateName = event=> setName(event.target.value)
  const updateDescription = event => setDescription(event.target.value)

  // handle the action when an item is clicked/completed
  let flipItem = item => (event) => {
    item.complete=!item.complete
    let newitems = items.filter(x => (!(x.id===item.id)))
    updateItems(newitems)
  }

  return (
   <>
     <h1> ToDo List </h1>

     <ul>
       {items
          .filter(item=>!item.complete)
          .map(item => (

         <li key={item.id}>
           <input type="checkbox"
                  onChange={flipItem(item)}
                  name={"complete"+item.id}
                  value={!item.complete} />
           {item.name} : {item.description}
         </li>

       ))}
     </ul>
     <form onSubmit={addItem}>
       <h2>New todo</h2>
       name: <input type="text" id="name" name="name" onChange={updateName}/><br />
       description: <input type="text" id="description" name="description" onChange={updateDescription} /><br />
       <input type="submit" value="add item to todo list" />
     </form>

     <h2>Here is the items JSON object</h2>

     <br />
     <pre>
     name = {JSON.stringify(name,null,2)}
     </pre>
     <br />
     <pre>
     description = {JSON.stringify(description, null,2)}
     </pre>
     <br />
     <pre>
     items ={JSON.stringify(items,null,2)}
     </pre>
   </>
 );
}

export default ToDoList;
