import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(
  _req: NextRequest,
  { params }: { params: { index: string } }
) {
  const idx = parseInt(params.index, 10);
  if (Number.isNaN(idx) || idx < 1 || idx > 999) {
    return NextResponse.json({ error: 'invalid index' }, { status: 400 });
  }
  const filename = `ezgif-frame-${String(idx).padStart(3, '0')}.jpg`;
  const filePath = path.join(process.cwd(), 'sequence', filename);
  try {
    const file = await fs.readFile(filePath);
    return new NextResponse(file, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }
}
