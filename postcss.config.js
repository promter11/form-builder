export default {
  plugins: {
    autoprefixer: {},
    "postcss-mixins": {
      silent: false,
      mixinsFiles: ["./src/app/styles/mixins.css"],
    },
    "postcss-nested": {},
  },
};
