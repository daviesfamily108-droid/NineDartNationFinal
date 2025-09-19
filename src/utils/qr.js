import QRCode from 'qrcode'
export async function makeQrCanvas(text){
  const canvas = document.createElement('canvas');
  await QRCode.toCanvas(canvas, text, { margin: 1, width: 180 });
  return canvas;
}
