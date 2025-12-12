import jwt from 'jsonwebtoken';

const createTokenandsaveCookie=(UserId,res)=>{
    const token=jwt.sign({UserId},process.env.JWT_TOKEN,{
        expiresIn:'10d',
    });
    res.cookie("jwt",token,{
        httpOnly:true,
        secure:true,
        sameSite:"Strict"
    })
}
export default createTokenandsaveCookie;