import next from 'eslint-config-next'

export default [
  { ignores: ['.next/**', 'node_modules/**', '.agents/**', '.claude/**', '.taste-skill/**', 'public/sw.js'] },
  ...next,
]
