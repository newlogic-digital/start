import typescriptEslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default typescriptEslint.config(
  {
    ignores: ['*.d.ts', '**/dist', '**/Icons.vue', '**/src/types'],
  },
  {
    extends: [
      stylistic.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...vue.configs['flat/recommended'],
    ],
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/script-indent': ['error', 2, { baseIndent: 1 }],
      'vue/html-self-closing': ['error', {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
      'vue/no-v-html': 'off',
    },
  },
  {
    files: ['**/*.{vue,ts}'],
    rules: {
      '@stylistic/indent': 'off',
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
)
