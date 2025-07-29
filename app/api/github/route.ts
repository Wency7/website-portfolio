// /app/api/github/route.ts
import { NextResponse } from "next/server";

const username = "Wency7";
const token = process.env.GITHUB_TOKEN;

export async function GET() {
  try {
    const headers = {
      Authorization: `token ${token}`,
    };

    const [ownedRes, allRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}/repos`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?type=all`, {
        headers,
      }),
    ]);

    const owned = await ownedRes.json();
    const all = await allRes.json();

    const contributed = all.filter(
      (repo: any) => repo.owner.login !== username
    );

    return NextResponse.json({ owned, contributed });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch repositories." },
      { status: 500 }
    );
  }
}
