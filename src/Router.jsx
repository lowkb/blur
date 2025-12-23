import Router from 'preact-router'
import Home from './pages/Home'
import Me from './pages/Me'

export default function AppRouter({ token, requireToken }) {
  return (
    <Router>
      <Home path="/" />
      <Me
        path="/me"
        token={token}
        requireToken={requireToken}
      />
    </Router>
  )
}
