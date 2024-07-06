export function getShortName(name: string): string {
  const parts = name.split(" ");
  const firstInitial = parts[0].charAt(0).toUpperCase();
  const lastInitial = parts.slice(-1)[0].charAt(0).toUpperCase();
  return `${firstInitial}.${lastInitial}`;
}
