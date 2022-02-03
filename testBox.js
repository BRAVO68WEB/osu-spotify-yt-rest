const { v2 } = require("osu-api-extended");

const main = async () => {
  // Auth via client
  await v2.login("12442", "gEiWsyXCFb3rpfsYl2sVIGGsQG7FslEXJCqI6dau");

  // Auth via lazer credentials
  //   await v2.login_lazer("bravo68web", "Jeet@27032003");

  // Auth via oauth2
  //   await v2.authorize("CLIENT_ID", "CLIENT_SECRET", "CALLBACK_URL");

  const data = await v2.beatmaps.search({ query: "Samurai (Spirix Remix)" });
  console.log(data);
};

main();
