export async function Get(request: Request) {
    return Response.json({ 'message': 'Get Category' }, { status: 200 });
}