import { asyncHandler } from "../utils/asynchHandler.js";

const registerUser= asyncHandler(async (req,res)=>{
    return res.status(200).json({
        message: "ok"
    })
})
export default registerUser;