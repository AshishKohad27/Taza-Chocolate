// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// const jwt = require('jsonwebtoken');
// const jwtSecretKey = process.env.JSON_SECRET_KEY;

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {

//     if (request.nextUrl.pathname.startsWith('/api/products/[productId]')) {
//         // This logic is only applied to /about
//         console.log("for product get route");
//     }

//     console.log("Middleware!--------------------------!");
//     const authToken: string | null = request.headers.get('auth-token');

//     const response = NextResponse.next();

//     // If Token Not Present
//     if (!authToken) {
//         return Response.json(
//             {
//                 data: [],
//                 message: "Token Not Present!",
//                 flag: false,
//                 desc: ""
//             },
//             { status: 401 });
//     }

//     // If Token Present then we verified the token
//     const verification = jwt.decode(authToken, jwtSecretKey);

//     // If token is not from admin
//     if (verification['role'] !== 'admin') {
//         return Response.json(
//             {
//                 data: [],
//                 message: "Unauthorized Person",
//                 flag: false,
//                 desc: ""
//             }, { status: 401 });
//     }

//     // If Token from admin
//     return response
// }

// export const config = {
//     matcher: ['/api/products/:function*', '/api/cart/:function*'],
// }

