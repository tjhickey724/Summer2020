import React,{useState} from 'react';
import useFetch from "../useFetch"

const PullData = () => {

    let {response,error,loading} = useFetch(
      "http://localhost:3500/db/dump", {query:{}}
    );

    // maintain state of form elements locally
    const [name,setName] = useState("")
    const [description, setDescription] = useState("")
    const updateName = event=> setName(event.target.value)
    const updateDescription = event => setDescription(event.target.value)

    // clear list on the server
    let clearList = async (event) => {
       await fetch("http://localhost:3500/db/reset/todo",
        {method:"GET",
         headers: {
          "Content-Type": "application/json",
          "mode": "no-cors",
          },
        })
        window.location.reload(false)
    }

    // send an item to be save on the server
    let sendItem = async (item) => {
      const result = await fetch("http://localhost:3500/db/add/todo",
         {method:"POST",
          headers: {
           "Content-Type": "application/json",
           "mode": "no-cors",
           },
          body:JSON.stringify({val:item}),
          })
      console.log("result="+JSON.stringify(result))
      return result
    }



    // send a new item to the todo list on the server
    let addItem  =  (event) => {
      const item = {name:name, description:description, complete:false}
      sendItem(item)
      window.location.reload(false)
      event.preventDefault()
    }



    return (
       <>
       <div>
         <h2>PullData</h2>
         <p> This app shows how to pull data from a server
             and use it in a React app.
         </p>

       <button onClick={clearList}> Clear list </button>
       <hr />

       <form onSubmit={addItem}>
         <h2>New todo</h2>
         name: <input type="text" id="name" name="name" onChange={updateName}/><br />
         description: <input type="text" id="description" name="description" onChange={updateDescription} /><br />
         <input type="submit" value="add item to todo list" />
       </form>

       <hr />

       {loading? <h2> ... </h2> : ""}
       {error? <h2>Error: the server might not be running! </h2> : ""}
          <ul>
          {/* here we make sure that response['todo'] is a list */
           response &&
           response['todo'] &&
             response['todo']
             .map(item => (

                <li key={item.id}>
                  <input type="checkbox"
                         name={"complete"+item.id}
                         value={!item.complete} />
                  {item.name} : {item.description}
                </li>

          ))}
        </ul>

        {/*
          <pre>
              data = {JSON.stringify(response,null,3)}
          </pre>
          */}
        </div>



       </>
      )
}

export default PullData;
