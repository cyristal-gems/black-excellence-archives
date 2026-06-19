import { NextResponse } from "next/server";
import { archiveName, archiveTagline, categories, profiles } from "../../data";

export function GET() {
  return NextResponse.json({
    name: archiveName,
    tagline: archiveTagline,
    categories,
    profiles,
  });
}
