module.exports = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  plugins: ['babel-plugin-macros',["babel-plugin-twin", { "debug": false }],['styled-components', { ssr: true }]],
}
