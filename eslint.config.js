import neostandard from 'neostandard'

export default neostandard({
  files: ['./**/*.ts', './**/.tsx'],
  ignores: ['dist/**/', 'tests/**'],
  ts: true,
  semi: false,
})
