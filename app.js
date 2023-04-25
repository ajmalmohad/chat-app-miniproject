/**
 * Config
 */
const express = require("express");
const app = express();
app.use(express.json());


/**
 * Routes
 */
app.get('/',(req, res)=>{ return res.status(200).json({message:"Works!"}); })
app.use('/auth', require('./src/routes/auth.js'));
app.listen(3000);


/**
 * Ideas
 */
// Handle Refresh Token ( Idea )
// 1. Store the refresh token in the database related to user. A user can have multiple refresh tokens for multiple devices.
// 2. When access token needs to be renewed, validate the refresh token and if it is valid, then parse the user from it
// 3. Search if the user has that refresh token in the database 
// 4. If user has that, then provide a new access token, otherwise forbid from creating new access token
// 5. If user logouts from a device, just delete that refresh token from the database
// 6. If user want to logout from all devices, then delete all the refresh token from the database



// Encode Refresh Token and Store in Database
// Decode and Verify if refresh token is Valid