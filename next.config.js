// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/unimelb-timetable" : "",
  assetPrefix: isProd ? "/unimelb-timetable/" : "",
};
