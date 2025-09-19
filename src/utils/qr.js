import { generateQR } from '../components/QR.js'
export async function makeCameraQR(url){ return await generateQR(url) }