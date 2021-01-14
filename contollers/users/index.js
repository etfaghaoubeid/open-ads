const db = require('../../utils/db');
const User = require('../../models/user')

exports.login = async (req, res) => {
    try {
        const user = await User.create({ name: 'atigh', email: 'elatigh@gmail.com' })
        console.log(user);
    } catch (err) {
        console.log(err.message , 'save eror')
    }
    res.send('helll0')
    
}