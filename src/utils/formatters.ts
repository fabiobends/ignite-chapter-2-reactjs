export function currencyFormatter(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function dateFormatter(date: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(date);
}
