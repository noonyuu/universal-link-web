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
  return new Response(JSON.stringify(aasa), {
    headers: {
      "content-type": "application/json",
    },
  });
}
