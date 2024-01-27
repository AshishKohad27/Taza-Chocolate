interface CustomContext {
    params: {
        productId: string;
    };
}

export async function GET(request: Request, context: CustomContext) {
    const productId = context.params.productId; // '1'
    console.log("Get By ProductId");
    return Response.json({ 'ProductID': productId });
}

export async function DELETE(request: Request, context: CustomContext) {
    const productId = context.params.productId; // '1'
    console.log("Delete Cart");
    return Response.json({ 'ProductID Delete': productId });
}

export async function PATCH(request: Request, context: CustomContext) {
    const productId = context.params.productId; // '1'
    console.log("Delete Cart");
    return Response.json({ 'ProductID Delete': productId });
}
