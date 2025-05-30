const register = async (req, res, next) => {
    const {firstName, lastName, username, password} = req.body;
    console.log ({firstName, lastName, username, password});
    try {
        const newUser ={
            firstName,
            lastName,
            username,
            password,
        };
        console.log("Controller registration working");
        res.status(201).json({
            success: ("User registered"),   
            data: {newUser}, 
            statusCosde: 201,   
        });
        
    } catch (error) {  
        res.status(500).json({
           error: { message: "Internal server error!" },
            statusCode: 500,
        });
    }