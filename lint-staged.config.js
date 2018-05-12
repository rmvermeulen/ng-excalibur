module.exports = {
  // consistent package.json formatting
  'package.json': ['yarn format-package -w', 'git add'],
  // format any file in src
  'src/**/*.{ts,json}': ['yarn format', 'git add'],
  // lint-fix and test and typescript file
  'src/**/*.ts': ['yarn fix:show-errors', 'git add', 'jest --findRelatedTests'],
}
