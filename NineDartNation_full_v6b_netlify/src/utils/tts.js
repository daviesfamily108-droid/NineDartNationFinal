export function speak(text){
  try{
    const u = new SpeechSynthesisUtterance(text)
    u.rate = 1.02; u.pitch = 1; u.volume = 0.9
    speechSynthesis.cancel()
    speechSynthesis.speak(u)
  }catch(e){}
}
