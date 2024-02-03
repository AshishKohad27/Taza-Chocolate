export async function GET(request: Request) {
    return Response.json({ 'message': 'Get Category' }, { status: 200 });
}