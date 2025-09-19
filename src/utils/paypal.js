export function loadPayPal(clientId, params=''){
  return new Promise((resolve, reject)=>{
    if (window.paypal) return resolve(window.paypal);
    const s = document.createElement('script');
    s.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=buttons,hosted-fields&enable-funding=card,venmo${params ? '&' + params : ''}`;
    s.onload = ()=> resolve(window.paypal);
    s.onerror = reject;
    document.head.appendChild(s);
  })
}
