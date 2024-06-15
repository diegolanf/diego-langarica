const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  moduleNameMapper: { '^flat$': 'node_modules/flat/index.js' },
};
