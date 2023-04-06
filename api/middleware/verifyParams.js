const verifyParams = (req, res, next) => {
    if (!req.params.id) {
        res.status(400).json({error: 'Le paramètre {id} est obligatoire.'});
    } else {
        next();
    }
}

module.exports = verifyParams;

