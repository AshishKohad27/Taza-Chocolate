import {
    AuthLoginBET,
    AuthQueryBET,
    AuthResponseControllerBET,
    AuthorizationBET,
} from "@/constant/server/auth-server";
import authModel from "@/model/auth";
import argon2 from "argon2";
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JSON_SECRET_KEY;
const jwtSecretRefreshKey = process.env.JSON_SECRET_REFRESH_KEY;

let globalSearch: any = "";
let globalPage: any = "";
let globallimit: any = "";

async function globalGetAuth(gs: any, gp: any, gl: any) {
    globalSearch = gs;
    globalPage = gp;
    globallimit = gl;

    if (!gp) {
        gp = 1;
    }

    if (!gl || gl < 10) {
        gl = 10;
    }

    const skipItems = gl * (gp - 1);
    let authUser = await authModel.find({
        $or: [{ first_name: new RegExp(gs, 'i') }, { last_name: new RegExp(gs, 'i') }],
    })
        .limit(gl)
        .skip(skipItems);

    return authUser;
}

export const postSignup = async ({
    first_name,
    last_name,
    email,
    password,
}: AuthorizationBET) => {
    const hashPassword: string = await argon2.hash(password);
    try {
        let authUser: Array<AuthorizationBET> = await authModel.find({ email });
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
            first_name,
            last_name,
            email,
            password: hashPassword,
        });
        await CreateAuth.save();

        return {
            data: CreateAuth,
            flag: true,
            desc: "",
            statusCode: 200,
            message: "Created Successfully!",
        };
    } catch (error: any) {
        console.error("Error in auth Signup Controller:", error);
        return {
            data: [],
            flag: false,
            desc: error.message,
            statusCode: 400,
            message: "Error Occurs!",
        };
    }
};

export const postLogin = async ({ email, password }: AuthLoginBET) => {
    try {
        let authUser: Array<AuthorizationBET> = await authModel.find({ email });

        // 1. If User Not Found
        if (authUser.length == 0) {
            return {
                data: authUser,
                flag: false,
                desc: "",
                statusCode: 203,
                message: "User With this Email-ID not Exists.",
            };
        }

        // 2.If User Exist they we verify password
        if (await argon2.verify(authUser[0].password, password)) {
            console.log("password verified!!!!");
            const taza_token = jwt.sign(
                {
                    _id: authUser[0]._id,
                    email: authUser[0].email,
                    first_name: authUser[0].first_name,
                    last_name: authUser[0].last_name,
                    role: authUser[0].role,
                },
                jwtSecretKey,
                { expiresIn: "4 days" }
            )
            const taza_refresh_token = jwt.sign(
                {
                    _id: authUser[0]._id,
                },
                jwtSecretRefreshKey,
                { expiresIn: "7 days" }
            );
            return {
                token: {
                    taza_token,
                    taza_refresh_token
                },
                flag: true,
                desc: "",
                statusCode: 200,
                message: "Login Successfully!",
            };
        } else {
            return {
                data: authUser,
                flag: false,
                desc: "",
                statusCode: 400,
                message: "You Enter Wrong Credentials",
            };
        }

    } catch (error: any) {
        console.error("Error in auth Login Controller:", error);
        return {
            data: [],
            flag: false,
            desc: error.message,
            statusCode: 400,
            message: "Error Occurs!",
        };
    }
};

export const getAuth = async ({ search, page, limit }: AuthQueryBET) => {
    try {
        let authUser: Array<AuthorizationBET> = await globalGetAuth(
            search,
            page,
            limit,
        );
        return {
            data: authUser,
            flag: true,
            desc: "",
            statusCode: 200,
            message: "Getting All Users!",
        };
    } catch (error: any) {
        console.error("Error in Get Auth Controller:", error);
        return {
            data: [],
            flag: false,
            desc: error.message,
            statusCode: 400,
            message: "Error Occurs!",
        };
    }
};

export const deleteAuth = async ({ AuthID }: any) => {
    try {
        await authModel.findByIdAndDelete({ _id: AuthID });
        let authUser: Array<AuthorizationBET> = await globalGetAuth(
            globalSearch,
            globalPage,
            globallimit,
        );
        return {
            data: authUser,
            flag: true,
            desc: "",
            statusCode: 200,
            message: "User Delete Successfully!",
        };
    } catch (error: any) {
        console.error("Error in Delete Auth Controller:", error);
        return {
            data: [],
            flag: false,
            desc: error.message,
            statusCode: 400,
            message: "Error Occurs!",
        };
    }
};

export const updateAuth = async ({ AuthID, ...payload }: any) => {
    console.log("payload:", payload);
    try {
        await authModel.findByIdAndUpdate({ _id: AuthID }, payload);
        let authUser: Array<AuthorizationBET> = await globalGetAuth(
            globalSearch,
            globalPage,
            globallimit,
        );
        return {
            data: authUser,
            flag: true,
            desc: "",
            statusCode: 200,
            message: "User Update Successfully!",
        };
    } catch (error: any) {
        console.error("Error in Update Auth Controller:", error);
        return {
            data: [],
            flag: false,
            desc: error.message,
            statusCode: 400,
            message: "Error Occurs!",
        };
    }
};
