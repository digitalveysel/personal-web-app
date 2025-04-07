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
