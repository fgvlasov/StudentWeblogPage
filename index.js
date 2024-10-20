/**
 * @license MIT
 * @copyright 2024 EMK
 */

/**
 * enables strict mode, which helps catch common coding errors and “unsafe” actions.
 */
'use strict';

const register = require('./src/routes/register_route')

/**
 * add Express module
 */
const express = require('express');
const app = express();

app.set('view engine' , 'ejs')

app.use('/register', register);

// app.get('/',(req, res)=>{
//     res.send('<h1>Hello, World!</h1>');
// })

/**
 * set up the server to listen on port 4000
 */
app.listen(4000, ()=>{
    console.log("Server is running on port 4000 http://localhost:4000");
});
