/*
  This demo shows all three ways that you can get data
  from a client to the server:
  as parameters  (bio/Tim/64)
  as a query (bio?name=Tim&age=64)
  in the body from a form with inputs named age and name
*/

const
  port = 3000,
  express = require("express"),
  app = express();

app.use(
  express.urlencoded({
    extended: false
  })
);
                              1
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Universe!");
})

app.get("/bio", (req, res) => {
  printReqInfo(req)
  res.send(`Enter your data below:<br>
  <form method="post" action="/bio">
    name: <input type="text" name="name"><br>
    age: <input type="number" name="age"><br>
    <input type="submit">
  </form>
    `);
})

app.post("/bio", (req, res) => {
  printReqInfo(req)
  res.send(`Update your data below:<br>
  <form method="post" action="/bio">
    name: <input type="text" name="name"><br>
    age: <input type="number" name="age"><br>
    <input type="submit">
  </form>
    `);
})

app.get("/bio/:name/:age", (req, res) => {
  printReqInfo(req)
  res.send("None of your business");
})

app.get("/help", (req, res) => {
  console.log("someone is viewing the help at time "+new Date())

  res.send("Under construction");
})

app.listen(port, () => {
  console.log(`The Express.js server has started and is listening
  on port number: ${port}`);
});

function printReqInfo(req){
  console.log(`params: ${JSON.stringify(req.params,null,2)}`)
  console.log(`body: ${JSON.stringify(req.body,null,2)}`)
  console.log(`url: ${JSON.stringify(req.url,null,2)}`)
  console.log(`query: ${JSON.stringify(req.query,null,2)}`)
  console.log("someone is viewing the bio at time "+new Date())

}
