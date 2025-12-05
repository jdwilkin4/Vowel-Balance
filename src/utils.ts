export function isVowel(char: string) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  return vowels.has(char);
}
