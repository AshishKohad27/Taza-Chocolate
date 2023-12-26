import { AuthResponseControllerBET, AuthorizationBET } from "@/constant/server/auth-server";
import authModel from "@/model/auth";

export const postSignup = async ({
    first_name,
    last_name,
    email,
    password,
}: AuthorizationBET) => {
    try {
        let authUser: Array<AuthResponseControllerBET> = await authModel.find({ email });
        console.log("authUser:", authUser);
        // 1. Checking user Already exist or not
        if (authUser.length !== 0) {
            return {
                data: authUser,
                flag: true,
                desc: "",
                statusCode: 200,
                message: "User Already Exist!",
            };
        }

        // 2. User Not Exist
        let CreateAuth = new authModel({
            first_name, last_name, email, password
        });
        await CreateAuth.save();

        return {
            data: CreateAuth,
            flag: true,
            desc: "",
            statusCode: 400,
            message: "Created Successfully!",
        };
    }
    catch (error: any) {
        console.error("Error in auth Controller:", error);
        return {
            data: [],
            flag: false,
            desc: error.message,
            statusCode: 400,
            message: "Error Occurs!",
        };
    }
}