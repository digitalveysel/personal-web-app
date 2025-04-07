// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
    {
      files: ['*.json', '*.json5'],
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        tabWidth: 2,
      },
    },
  ],
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
};

export default config;
