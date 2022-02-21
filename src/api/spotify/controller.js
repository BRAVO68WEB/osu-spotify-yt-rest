import axios from "axios";
const { v2 } = require("osu-api-extended");

v2.login(process.env.OSU_API_CLIENT_ID, process.env.OSU_API_CLIENT_SECRET);

export const show = (req, res, next) => {
  var config = {
    method: "get",
    url: `http://bravo68web-api.herokuapp.com/api/private/spotify/track/${req.params.trackID}`,
    headers: {
      apikey: process.env.B68W_API_KEY,
      email: process.env.B68W_API_EMAIL,
    },
  };

  axios(config)
    .then(async function (response) {
      const data = await v2.beatmaps.search({ query: response.data.name.name });
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).json({ error: err.message });
    });
};
