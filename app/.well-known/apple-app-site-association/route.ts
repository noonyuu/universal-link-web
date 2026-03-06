import { NextResponse } from "next/server";

const aasa = {
  applinks: {
    details: [
      {
        appIDs: ["SDCTHQR6AD.com.noonyuu.UniversalLink"],
        components: [
          {
            "NOT /": "/open",
            "?": { app: "false" },
            comment: "FF ON: app=falseの場合はアプリへの遷移を除外",
          },
          {
            "/": "/open",
            comment: "FF OFF: アプリで開く",
          },
        ],
      },
    ],
  },
};

export async function GET() {
  return NextResponse.json(aasa);
}
