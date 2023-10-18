export function idFactory(string: string) {
  const normalizedText = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  const lowercaseText = normalizedText.toLowerCase()

  return lowercaseText
}
