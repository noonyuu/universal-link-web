const aasa = {
  applinks: {
    details: [
      {
        appIDs: ["SDCTHQR6AD.com.noonyuu.UniversalLink"],
        components: [
          {
            "NOT /": "/open",
            "?": { app: "false" },
          },
          {
            "/": "/open",
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
