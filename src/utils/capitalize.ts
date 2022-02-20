export function capitalize(word: string) {
  const lowerCaseWord = word.toLowerCase()

  return word.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
}
