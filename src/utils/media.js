export async function openRearCamera(videoEl){
  const devices = await navigator.mediaDevices.enumerateDevices()
  const rear = devices.find(d=>/back|rear|environment/i.test(d.label))
  const stream = await navigator.mediaDevices.getUserMedia({
    audio:false,
    video: rear ? { deviceId:{exact:rear.deviceId} } : { facingMode:'environment' }
  })
  videoEl.srcObject = stream
  await videoEl.play()
  return stream
}