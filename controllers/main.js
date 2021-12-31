
const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
    const {username, password} = req.body;
    // console.log(username, password);
    
    if(!username || !password){
        throw new CustomAPIError('Username and password are required', 400);
    }
//demo purposes
const id = new Date().getDate();

    const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn: '30d'});
    // res.send('Fake Login/Signup Page');
    res.status(200).send({msg:'user created', token})
}
    
    const dashboard = async (req, res) => {
        console.log(req.user);
        const luckyNumber = Math.floor(Math.random() * 100);
        
        res.status(200).send({msg: `Hello ${req.user.username}`, secret:`your lucky number is ${luckyNumber}`});
        
    }
    
    module.exports ={login, dashboard};