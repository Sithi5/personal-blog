import { HttpStatusCode } from 'constants/enum';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
    const filePath = path.join(
        process.cwd(),
        'public',
        'cabinet-saint-guillaume',
        'privacy-policy.pdf'
    );
    const fileName = 'privacy-policy.pdf';

    try {
        const fileContents = fs.readFileSync(filePath);

        return new NextResponse(fileContents, {
            status: HttpStatusCode.OK,
            headers: {
                'Content-Disposition': `attachment; filename="${fileName}"`,
                'Content-Type': 'application/pdf',
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', {
            status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        });
    }
}
