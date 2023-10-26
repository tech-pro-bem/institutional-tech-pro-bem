export function idFactory(string: string) {
  const normalizedText = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  const lowercaseTextWithoutSpaces = normalizedText
    .toLowerCase()
    .split(' ')
    .join('')

  return lowercaseTextWithoutSpaces
}
