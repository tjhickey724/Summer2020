"use strict";

const httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

const routes = {
  GET: {},
  POST: {}
};

exports.handle = (req, res) => {

  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
  printRoutes(`adding GET route for ${url}`)
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
  printRoutes(`adding POST route for ${url}`)
};

function printRoutes(label){
  console.log("\n\n\n\n\n\n**************\n\n")
  console.log(label)
  for (let key in routes){
    for(let url in routes[key]){
      console.log(key+": "+url+": "+routes[key][url])
    }
  }
}
