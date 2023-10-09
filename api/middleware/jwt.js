export const verifytoken=(req,res,next) =>{
    const token =req.cookies.accessToken;
    if(!token) return next(createError(401,"You are not authenticated!"))

    const secretkey="944e8896ba383d01fe3ac772002ad349";
    
    jwt.verify(token,secretkey,async (err,payload)=>{
        if(err) return  next(createError(403,"Token is not valid!"))
       req.userId=payload.id;
       req.isSeller=payload.isSeller;
       next()

    });
}