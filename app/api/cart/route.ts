export async function GET(request: Request) {
    console.log("Cart Products");
    return Response.json("Cart Route Get", {
        status: 201,
    });
}

export async function POST(request: Request) {
    console.log("Post Cart");
    return Response.json("Cart Route Post");
}
