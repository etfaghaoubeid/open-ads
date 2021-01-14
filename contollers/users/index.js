const User = require('../../models/user')
exports.login = async (req, res) => {
    const newUser ={ name: 'atigh', email: 'elatigh@gmail.com' }
    try {
        console.log(User.protoype)
        const user = await User.create(newUser)
        await user.save();
        return res.status(201).json(user)
    } catch (err) {
        console.log(err.message , 'save eror')
    }
    
}
exports.getAllusers = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}