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

const axios = require("axios");
const errorController = require('./controllers/errorController');
const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

app.use(layouts);
app.use(express.static("public"));
/*
  The next two calls to app.use tell the app router
  to parse the url data and the form data into json
*/
app.use(
  express.urlencoded({
    extended: false
  })
);
                              1
app.use(express.json());


app.use((req, res, next) => {
  console.log(`\n\n\n--------\nrequest made to: ${req.url}`);
  console.log(`req.method=${JSON.stringify(req.method,null,2)}`)
  console.log(`req.body=${JSON.stringify(req.body,null,2)}`)
  console.log(`req.query=${JSON.stringify(req.query,null,2)}`)
  next();
});

function showParams(req){
  console.log(`req.params=${JSON.stringify(req.params,null,2)}`)
}

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/abc", (req,res,next) => {
  res.locals.val=
    {name:"Tim",
     list:[2,3,5,7,11,13]}
  res.render("abc")
})

app.get("/abcd", (req,res,next) => {
  res.json(req.query)
})

app.get("/delete/:id", (req,res,next) => {
  res.json(req.params)
})

app.get("/abc/:lang/:content/:base", (req,res,next) => {
  res.json(req.params)
})

app.post("/abc", (req,res,next) => {
  res.json(req.body)
})

app.get("/hello/:name", (req,res,next) => {
  res.locals.name = req.params.name
  res.render("helloform")
})

app.get("/hello2/:user", (req,res,next) => {
  let u = req.params.user
  res.render("helloform",{name:u})
})

app.get("/bio", (req, res) => {
  res.send(`Enter your data below:<br>
  <form method="post" action="/bio">
    name: <input type="text" name="name"><br>
    age: <input type="number" name="age"><br>
    <input type="submit">
  </form>
    `);
})

app.post("/bio", (req, res) => {
  res.send(`Thanks for submitting your info!`)
})

app.get("/bio/:name/:age", (req, res) => {
  showParams(req)
  res.send("None of your business");
})

app.get("/help", (req, res) => {
  console.log("someone is viewing the help at time "+new Date())

  res.send("Under construction");
})

app.get("/covid19/:method",
  async (req,res,next) => {
    try {
      let method = req.params.method
      let result = await axios.get("https://covidtracking.com/api/v1/states/current.json");
      //https://covidtracking.com/api/v1/states/daily.json")
      let data = result['data']
      if (method=="json"){
         res.json(data)
       } else {
         res.render('covid19',{data:data})
       }
    }
    catch(e){
      next(e)
    }
  })

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);


app.listen(port, () => {
  console.log(`The Express.js server has started and is listening
  on port number: ${port}`);
});
