const express = require('express');
// const {registerUser} = 

const router=express.router();

router.post('/register', registerUser);

module.export = router;