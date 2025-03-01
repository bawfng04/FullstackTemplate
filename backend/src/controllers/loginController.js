const LoginModel = require("../models/loginModel");

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if(!username || !password){
            return res.status(400).json({ message: "Username and password are required" });
        }
        const result = await LoginModel.loginUser(username, password);
        res.status(result.status).json({ message: result.message, username: username });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { loginUser };