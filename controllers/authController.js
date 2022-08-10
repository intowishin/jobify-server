import User from "../models/User.js";

const register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({user});
    }
    catch (err) {
        res.status(500).json({ msg:"There was an error registering the user" });
    }
}

const login = async (req, res) => {
    res.send('Login');
}

const update = async (req, res) => {
    res.send('Update');
}

export { register, login, update };