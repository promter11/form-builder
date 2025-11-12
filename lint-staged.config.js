export default {
  "*.{js,ts,vue}": ["yarn lint", () => "yarn typecheck"],
};
