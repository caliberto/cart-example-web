export function toLocalePrice(price: number, locale: string = "it-IT") {
    return price.toLocaleString(locale, {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    });
}