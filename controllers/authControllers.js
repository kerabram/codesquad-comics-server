const register = async (req, res, next) => {
    const {firstName, lastName, username, password} = req.body;
    console.log ({firstName, lastName, username, password});
    try {
        const newUser ={
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
        };
        console.log("Controller registration working");
        res.status(201).json({
            success: ("New user registered"),   
            data: {newUser}, 
            statusCode: 201,   
        });
    } catch (error) {  
        res.status(500).json({
           error: { message: "Internal server error!" },
            statusCode: 500,
        });
    }
}; 
const login = async (req, res, next) => {
    try {
        res.status(200).json({
            success: { message: "User logged in" },
            statusCode: 200,
        });
    } catch (error) {
        res.status(500).json({
            error: { message: "Internal server error!" },
            statusCode: 500,
        });
    }
};

const logout = async (req, res, next) => {
    console.log("Initializing logout controller logic...");
    console.log("session destroy");
    response.clearCookie("connect.sid");
    res.status(200).json({
        success: { message: "User logged out" },
        statusCode: 200
    });
    function sessionDestruction(err) {
        if (err) {
            return next(err);
        }
    }
    sessionDestruction();
    console.log("Logout function activated. logged out");
};

const localLogin = async (req, res, next) => {
    let result = true;
    function mockPassport(err, user) {
if (err) {
  return next(err);
 }
}
mockPassport();
res.status(200).json({
        success: { message: "Login successful" },
        result: result,
    });
};
    

module.exports = { register, login, logout, localLogin };