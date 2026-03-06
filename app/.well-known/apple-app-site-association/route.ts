const aasa = {
  applinks: {
    details: [
      {
        appID: "SDCTHQR6AD.com.noonyuu.UniversalLink",
        paths: ["/open"],
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
