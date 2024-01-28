import connectDB from "@/config/db";
import { deleteAuth, updateAuth } from "@/controller/auth";
import { NextRequest } from "next/server";

// export default async function AuthRoute(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     await connectDB();
//     if (req.method === "DELETE") {
//         // Token Details

//         // try {
//         //     const token = req.headers['authorization_token'];
//         //     console.log("token:", token);

//         //     if (token) {
//         //         const tokenDecode = jwt.decode(token, jwtSecretKey);
//         //         console.log("tokenDecode:", tokenDecode);
//         //     } else {
//         //         return {
//         //             data: [],
//         //             flag: false,
//         //             desc: '',
//         //             statusCode: 404,
//         //             message: "Token Not Present!",
//         //         };
//         //     }

//         // } catch (error: any) {
//         //     console.error("Auth MiddleWare:", error);
//         //     return {
//         //         data: [],
//         //         flag: false,
//         //         desc: error.message,
//         //         statusCode: 400,
//         //         message: "Error Occurs!",
//         //     };
//         // }

//         console.log("Delete Auth!");
//         const AuthID: any = req.query.id;

//         const { data, flag, desc, statusCode, message }: AuthResponseControllerBET =
//             await deleteAuth({ AuthID });
//         if (flag) {
//             return res.status(statusCode).send({ message, desc, data, flag });
//         } else {
//             return res.status(statusCode).send({ message, desc, data, flag });
//         }

//     } else if (req.method === "PATCH") {
//         console.log("Update Auth!");
//         const AuthID: any = req.query.id;
//         const { first_name, last_name, email, password } = req.body;
//         console.log(req.body);

//         const { data, flag, desc, statusCode, message }: AuthResponseControllerBET =
//             await updateAuth({ AuthID, ...req.body });

//         if (flag) {
//             return res.status(statusCode).send({ message, desc, data, flag });
//         } else {
//             return res.status(statusCode).send({ message, desc, data, flag });
//         }
//     }
// }


interface CustomContext {
    params: {
        authId: string;
    };
}

export async function DELETE(request: NextRequest, context: CustomContext) {
    await connectDB();
    const AuthId: string = context.params.authId;

    const { data, flag, desc, statusCode, message } = await deleteAuth({ AuthId });

    if (flag) {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        })
    }
}