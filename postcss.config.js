module.exports = ({ file }) => {
  const designWidth = file.includes("node_modules/vant") ? 375 : 750;

  return {
    plugins: [
      require("postcss-px-to-viewport")({
        unitToConvert: "px",
        viewportWidth: designWidth,
        unitPrecision: 5,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        // include: /\/src\//,
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 1125,
      }),

      /**
       * browsersList在package.json中设置即可
       */
      require("autoprefixer")({
        overrideBrowserslist: ["> 1%", "last 2 versions", "Firefox ESR"],
      }),
    ],
  };
};
