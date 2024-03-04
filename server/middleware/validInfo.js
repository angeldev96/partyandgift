module.exports = function (req, res, next) {
    const { email, name, password } = req.body;

    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    } 

    if(req.path === "/register") {

        if(! [email, name, password].every(Boolean)) {
            return res.status(401).json('Uno o mas datos hacen falta');
        } else if(!validEmail(email)) {
            return res.status(401).json('Email no valido');
        }
    } else if(req.path === "/login") {

        if(![email, password].every(Boolean)) {
            return res.status(401).json('Falta informacion');
        } else if(!validEmail(email)) {
            return res.status(401).json('Email no valido');
        }
    }

    next();
}