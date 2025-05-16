import { useState } from 'react'
import './rule.css'
import rule from '../../assets/images/image-rules.svg'

export default function Rule() {
  const [showRules, setShowRules] = useState(false)

  return (
    <>
      <div>
        <button id="btn-rule" onClick={() => setShowRules(true)}>RULES</button>
      </div>

      {showRules && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={rule} alt="Rules" />
            <button className="close-btn" onClick={() => setShowRules(false)}>X</button>
          </div>
        </div>
      )}
    </>
  )
}
