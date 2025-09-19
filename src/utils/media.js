export async function getBackCameraStream({ audio=false }={}){
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoInputs = devices.filter(d=>d.kind==='videoinput');
  const back = videoInputs.find(d=>/back|rear|environment/i.test(d.label)) || videoInputs[videoInputs.length-1];
  const constraints = {
    audio: audio ? { echoCancellation: true, noiseSuppression: true } : false,
    video: back ? { deviceId: { exact: back.deviceId } } : { facingMode: { ideal:'environment' } }
  };
  return navigator.mediaDevices.getUserMedia(constraints);
}
