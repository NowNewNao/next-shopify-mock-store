// checkoutIdを取得
export function getCheckoutId(): string {
  console.log('before', localStorage.getItem('checkoutId'))
  return localStorage.getItem('checkoutId') ?? '';
}

// checkoutIdを保存
export function setCheckoutId(checkoutId: string | number) {
  console.log('before')
  localStorage.setItem('checkoutId', String(checkoutId));
  console.log('after')
}
