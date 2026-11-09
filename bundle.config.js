export default {
  port: Number(process.env.HYDRO_TEST_SERVER_PORT || 5000),
  build: process.env.HYDRO_BUILD_DIR || "build",
};
