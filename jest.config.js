module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testEnvironment: 'jsdom',
}
