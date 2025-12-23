import { route } from 'preact-router'

export default function Me({ token, requireToken }) {
  if (token !== 'tajnytoken123') {
    requireToken()
    route('/')
    return null
  }

  return <h1>Me (Authorized)</h1>
}
