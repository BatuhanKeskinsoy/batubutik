export function getStarredName(name: string): string {
  return name
    .split(" ")
    .map(
      (word) => `${word.charAt(0)}${"*".repeat(Math.min(2, word.length - 1))}`
    )
    .join(" ");
}
