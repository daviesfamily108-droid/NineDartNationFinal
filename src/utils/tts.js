export function say(text){
  try{ const u = new SpeechSynthesisUtterance(text); u.rate=1; speechSynthesis.speak(u) }catch{}
}