const express = require('express');
const router = express.Router();
const pool = require('../db');   
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');


router.post('/register', validInfo, async (req, res) => {

    try {

            const { name, email, password } = req.body;
           
            const user = await pool.query("SELECT * FROM login WHERE email = $1", [
                email
            ]);

            if (user.rows.length > 0) {
                return res.json("Ya existe una cuenta con este correo");
              } 
              
              
              
            const saltRound = 10;
            const salt = await bcrypt.genSalt(saltRound);
            
            const bcryptPassword = await bcrypt.hash(password, salt);

  
            const newUser = await pool.query("INSERT INTO login(nombre, email, password) VALUES($1, $2, $3) RETURNING *", [
                nombre, email, bcryptPassword
            ]);
            
        

            const token = jwtGenerator(newUser.rows[0].user_id);
            res.json({ nombre, token });
        
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


router.post('/login', validInfo, async (req, res) => {
    try {
        

        const { email, password } = req.body;
        

        const user = await pool.query("SELECT * FROM login WHERE email = $1", [
            email
        ]);

        if(user.rows.length === 0) {
            return res.status(401).json("Email o Contrasena incorrecta. Intente de Nuevo");
        }



        const passwordValid = await bcrypt.compare(password, user.rows[0].user_password);
        
        if(!passwordValid) {
            return res.status(401).json("Email o Contrasena incorrecta. Intente de Nuevo");
        }


     
        const token = jwtGenerator(user.rows[0].user_id);
        const name = user.rows[0].user_name;
        res.json({ name, token});

    } catch (err) {
        res.status(500).send('Server Error');
    }
});

    router.post("/verified", authorization, (req, res) => {
        try {
            res.json(true);

        } catch (err) {
            res.status(500).send('Server Error');     
        }
    });

module.exports = router;
