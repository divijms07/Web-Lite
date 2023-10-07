export const verifytoken=(req,res) =>{
    const token =req.cookies.accessToken;
    if(!token) return res.status(401).send("You are not authenicated!");

    const secretkey="944e8896ba383d01fe3ac772002ad349";
    
    jwt.verify(token,secretkey,async (err,payload)=>{
        if(err) return res.status(403).send("Token is not valid !");
       req.userId=payload.id;
       req.isSeller=payload.isSeller;
    });
}