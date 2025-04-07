/**
 * @filename lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,mdx,yml,yaml}": [
    "prettier --write"
  ]
};

export default config;
