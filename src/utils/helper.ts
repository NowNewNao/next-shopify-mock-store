// checkoutIdを取得
export function getCheckoutId(): string {
  return localStorage.getItem('checkoutId') ?? '';
}

// checkoutIdを保存
export function setCheckoutId(checkoutId: string | number) {
  localStorage.setItem('checkoutId', String(checkoutId));
}