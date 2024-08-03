// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextConfig = {
  output: 'export',
  staticPageGenerationTimeout: 1500,
  images: { loader: "custom" , unoptimized : true},
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig