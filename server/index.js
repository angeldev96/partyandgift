const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/jwtauth.js"));

app.use('/dashboard', require("./routes/dashboard"));

let port = process.env.port || 4230;
app.listen(port, () => {
    console.log('El server esta trabajando en el puerto ' + port);
});