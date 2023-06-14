import { HttpStatusCode } from 'constants/enum';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    return NextResponse.json(
        { message: 'Welcome to my API!' },
        { status: HttpStatusCode.OK }
    );
}
