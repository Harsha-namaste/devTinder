const adminAuth = (req, res, next) => {
    console.log("Entered into admin Authentication")
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if(!isAuthorized) {
        return res.status(401).send({message: "User not authorized"});
    }else {
        next();
    }
}

module.exports = adminAuth ;