// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import data from "../../data.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json({ jobs: data });
};
