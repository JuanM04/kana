/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/dist",
    public: "/",
  },
  plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-postcss"],
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  optimize: {
    bundle: true,
    minify: true,
    splitting: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    "@components": "./src/components",
    "@pages": "./src/pages",
    "@kana": "./src/kana.ts",
  },
};
