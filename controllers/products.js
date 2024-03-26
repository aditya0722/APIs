const getAllProducts= async (req,res)=>{
        res.status(200).json({msg:"Get all products"});
};
const getAllProductstesting= async (req,res)=>{
    res.status(200).json({msg:"Get all products Testing"});
};
module.exports={getAllProducts,getAllProductstesting}