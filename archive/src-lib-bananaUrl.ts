export default function bananaUrl(provider_id: 1 | 2) {
  if (provider_id === 1 || !provider_id) return "https://api.banana.dev";
  // if (provider_id === 2) return "https://api.app.titanplus.cn/api";
  if (provider_id === 2) return "https://api-ams.app.titanplus.cn";
  return "UNKNOWN PROVIDER " + provider_id;
}
