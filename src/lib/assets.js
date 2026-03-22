export function getAssetPath(relativePath) {
  if (!relativePath) {
    return ''
  }

  if (
    relativePath.startsWith('http://') ||
    relativePath.startsWith('https://') ||
    relativePath.startsWith('data:')
  ) {
    return relativePath
  }

  const cleanPath = relativePath.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${cleanPath}`
}
