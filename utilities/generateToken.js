const jwt = require('jsonwebtoken')


const generateToken = (id , role ="user")=>{
    const token = jwt.sign({ id ,role },process.env.JWT_SECRET)
    return token
}
module.exports = generateToken