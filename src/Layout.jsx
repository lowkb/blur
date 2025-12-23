import { useState } from 'preact/hooks'
import AppRouter from './Router'
import Modal from './components/Modal'

export default function Layout() {
  const [token, setToken] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div class="layout">
      <aside class="sidebar">
        <a href="/">🏠</a>
        <a href="/me">👤</a>
      </aside>

      <div class="content">
        <header class="header">Header</header>

        <main class="main">
          <AppRouter
            token={token}
            requireToken={() => setModalOpen(true)}
          />
        </main>
      </div>

      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          onSubmit={(value) => {
            if (value === 'tajnytoken123') {
              setToken(value)
              setModalOpen(false)
            }
          }}
        />
      )}
    </div>
  )
}
