const register = async (req, res) => {
    res.send('Register');
}

const login = async (req, res) => {
    res.send('Login');
}

const update = async (req, res) => {
    res.send('Update');
}

export { register, login, update };