const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {UserRepository} = require('../repositories');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data)
    {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } 
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    async signin(data)
    {
        try{
            // step 1-> fetch the user using the email
            const user = await this.userRepository.getUserByEmail(data.email);
            if(!user) {
                throw new Error('user not found');
            }
            // step 2-> compare incoming plain password with stores encrypted password
            const passwordsMatch = checkPassword(data.password, user.password);
            if(!passwordsMatch) {
                throw new Error('invalid password');
            }
             // step 3-> if passwords match then create a token and send it to the user
            const newJWT = createToken(user);
            return newJWT;
        }
        catch(error) {
            console.log(error);
            throw error;
        }

    }

}
function checkPassword(userInputPlainPassword, encryptedPassword) 
{
    try{
        return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } 
    catch (error) {
        throw error;
    }
}

function createToken(user) 
{
    try {
        const result = jwt.sign({id:user.id, email:user.email}, 'twitter_secret', {
            expiresIn: '1h'
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = UserService;