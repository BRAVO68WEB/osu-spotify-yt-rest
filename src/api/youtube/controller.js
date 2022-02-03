var axios = require("axios");
const { v2 } = require("osu-api-extended");

v2.login(process.env.OSU_API_CLIENT_ID, process.env.OSU_API_CLIENT_SECRET);

export const show = ({ params }, res, next) => {
  var config = {
    method: "get",
    url: `https://bravo68web-api.herokuapp.com/api/private/yt/video/${params.id}`,
    headers: {
      apikey: process.env.B68W_API_KEY,
      email: process.env.B68W_API_EMAIL,
    },
  };

  axios(config)
    .then(async function (response) {
      var videoTitle = response.data.snippet.title; //original title
      var title = videoTitle;
      if (title.includes("-")) title.substring(title.indexOf("-") + 1);
      if (title.includes(" | ")) {
        title = title.substring(0, title.indexOf("|"));
      }
      if (title.includes("(")) {
        var bracketIndex = videoTitle.indexOf("(");
        title = videoTitle.substring(0, bracketIndex);
      }
      const data = await v2.beatmaps.search({ query: title });
      console.log(title);
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
