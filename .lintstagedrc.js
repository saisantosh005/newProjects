module.exports = {
  '**/*.ts?(x)': ['prettier --write', 'eslint --fix'],
  '**/*.js?(x)': ['prettier --write', 'eslint --fix'],
};
