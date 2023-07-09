const {UserService}=require('../services');
const userService = new UserService();

async function signup(req ,res)
{
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong while signing up a new user',
            data: {},
            success: false,
            error: error
        });
    }
}

async function signin(req ,res)
{
    try {
        const token = await userService.signin({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong while sign-in',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports={
    signin,
    signup
}