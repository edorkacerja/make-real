import {NextRequest, NextResponse} from 'next/server';
import {sql} from "@vercel/postgres";


export async function POST(req: NextRequest) {
    try {

        const res = await req.json()
        let { shapeId, html } = res

        if (typeof shapeId !== 'string' || !shapeId.startsWith('shape:')) {
            throw new Error('shapeId must be a string starting with shape:')
        }
        if (typeof html !== 'string') {
            throw new Error('html must be a string')
        }
        shapeId = shapeId.replace(/^shape:/, '')

        const result =
            await  sql`INSERT INTO links (shape_id, html) VALUES (${shapeId}, ${html})`;

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const result = "Hello World!";
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

//export async function uploadLink(shapeId: string, html: string) {
// 	if (typeof shapeId !== 'string' || !shapeId.startsWith('shape:')) {
// 		throw new Error('shapeId must be a string starting with shape:')
// 	}
// 	if (typeof html !== 'string') {
// 		throw new Error('html must be a string')
// 	}
//
// 	shapeId = shapeId.replace(/^shape:/, '')
// 	await sql`INSERT INTO links (shape_id, html) VALUES (${shapeId}, ${html})`
// }