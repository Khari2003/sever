const jwt = require('jsonwebtoken');
const fs = require('fs');
const pass = fs.readFileSync("./pass.txt")

// const token = jwt.sign({id:'62f4799c4b4e45e5880147b6'},pass,{expiresIn:60})
// console.log(token)

const string ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjQ3OTljNGI0ZTQ1ZTU4ODAxNDdiNiIsImlhdCI6MTY2MjQwMTY2MywiZXhwIjoxNjYyNDAxNzIzfQ.zqAnmEWINNnDHMNYiv1j0ugsK_cFBGU-v8FE_r3p9Xg'
const data = jwt.verify(string,pass)
console.log(data)