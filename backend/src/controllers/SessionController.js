const User = require('../models/User')

// index, show, store, update, destroy

module.exports = {
    async store(req, res){
        /* mesma coisa que:
           const email = req.body.email;
        */
        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if (!user){
            user = await User.create({ email });
        }
        // const user = await User.create({ email });
        
        return res.json(user);
    }
}