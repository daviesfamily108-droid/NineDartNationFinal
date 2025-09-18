export async function openRearCamera(videoEl){
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: { ideal:'environment' } },
    audio: false
  })
  videoEl.srcObject = stream
  await videoEl.play()
  return stream
}
