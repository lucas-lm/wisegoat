module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/advice/': { page: '/advice' },
    }
  },
}
