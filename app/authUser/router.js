const authUserRouter = require('express').Router();

authUserRouter.post('/register', (req,res)=>{
    return res.json({oke:'oke'})
});

module.exports = authUserRouter;
