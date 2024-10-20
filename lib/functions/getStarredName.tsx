export function getStarredName(firstName: string, lastName: string): string {
  const starFirstName = `${firstName.charAt(0)}${"*".repeat(
    Math.min(2, firstName.length - 1)
  )}`;
  const starLastName = `${lastName.charAt(0)}${"*".repeat(
    Math.min(2, lastName.length - 1)
  )}`;

  return `${starFirstName} ${starLastName}`;
}
