require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    extends: [
      'plugin:vue/vue3-strongly-recommended',
      '@vue/eslint-config-typescript/recommended'
    ],
    ignorePatterns: [
      'node_modules',
      'dist',
      'src/assets'
    ],
    rules: {
      '@typescript-eslint/semi': ['error', 'never']
    }
  }