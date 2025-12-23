import { useState } from 'preact/hooks'

export default function Modal({ onClose, onSubmit }) {
  const [value, setValue] = useState('')

  return (
    <div class="modal-backdrop">
      <div class="modal">
        <h3>Podaj token</h3>

        <input
          value={value}
          onInput={e => setValue(e.target.value)}
        />

        <div class="actions">
          <button onClick={() => onSubmit(value)}>OK</button>
          <button onClick={onClose}>Anuluj</button>
        </div>
      </div>
    </div>
  )
}
