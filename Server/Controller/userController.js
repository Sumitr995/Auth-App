import userModel from "../models/userModel.js";

export const getUserData = async(req, res)=>{

try {
    const userId = req.user.id;
    const user = await userModel.findById(userId);

    if(!user){
       return res.json({success:false, message:"User not logged in"});
    }

    console.log(user.name)
    return res.json({
        success: true,
        userData:{
            name: user.name,
            isAccountVerfied: user.isAccountVerfied
        }
    })

   
    
} catch (error) {
    res.json({success:false, message: error.message});
}

};