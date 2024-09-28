export function getPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    currency: "TRY",
    style: "currency",
    minimumFractionDigits: 2,
  }).format(price).replace('₺', '').trim() + ' ₺';
}