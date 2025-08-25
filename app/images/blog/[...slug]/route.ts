import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    const imagePath = join(
      process.cwd(),
      "app",
      "images",
      "blog",
      ...params.slug
    );

    const imageBuffer = await readFile(imagePath);

    // Determine content type based on file extension
    const ext = params.slug[params.slug.length - 1]
      .split(".")
      .pop()
      ?.toLowerCase();
    let contentType = "image/png"; // default

    if (ext === "jpg" || ext === "jpeg") contentType = "image/jpeg";
    else if (ext === "gif") contentType = "image/gif";
    else if (ext === "webp") contentType = "image/webp";
    else if (ext === "svg") contentType = "image/svg+xml";

    return new NextResponse(new Uint8Array(imageBuffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return new NextResponse("Image not found", { status: 404 });
  }
}
