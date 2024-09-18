import eslintPluginYml from 'eslint-plugin-yml';
export default [
  ...eslintPluginYml.configs['flat/recommended'],
  {
    rules: {
    'yml/indent': ['error', 2]
    }
  }
];