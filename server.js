const express = require('express'); /*  Node.js web application framework 
features : 
Allows to set up middlewares to respond to HTTP Requests.
Defines a routing table which is used to perform different actions based on HTTP Method and URL.
Allows to dynamically render HTML Pages based on passing arguments to templates.*/

const app = express(); //// Creating app object 

///   / This responds with "Hello Get Request" on the homepage
app.get('/', function (req, res) {
    
    res.send('Hello Get Request');
    res.end();
 })

 // This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
    res.end();
 })

 // This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
    res.end();
 })
 
 // This responds a GET request for the /list_user page.
 app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
    res.end();
 })
 // This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
    res.end();
 })
 
const server=app.listen(8081,"127.0.0.1",function (){
   var host = server.address().address
   var port = server.address().port
   console.log(host,port);
})