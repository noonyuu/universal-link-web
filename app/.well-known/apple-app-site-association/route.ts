const aasa = {
  applinks: {
    details: [
      {
        appID: "SDCTHQR6AD.com.noonyuu.UniversalLink",
        paths: [
          "NOT /open*app=false*",
          "/open*",
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
