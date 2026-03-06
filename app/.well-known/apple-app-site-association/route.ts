import { NextResponse } from "next/server";

const aasa = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "SDCTHQR6AD.com.noonyuu.UniversalLink",
        paths: ["NOT /open*app=false*", "/open*"],
      },
    ],
  },
};

export async function GET() {
  return NextResponse.json(aasa);
}
