import netlifyIdentity from 'netlify-identity-widget'
export function openLogin(){ netlifyIdentity.open('login') }
export function openSignup(){ netlifyIdentity.open('signup') }
export function logout(){ netlifyIdentity.logout() }
export function current(){ return netlifyIdentity.currentUser() }
