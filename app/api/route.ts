import { HttpStatusCode } from 'constants/enum';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(
        { message: 'Welcome to my API!' },
        { status: HttpStatusCode.OK }
    );
}
