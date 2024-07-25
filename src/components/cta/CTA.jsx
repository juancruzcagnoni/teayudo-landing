import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className='gpt3__cta' data-aos="fade-up">
      <div className="gpt3__cta-content">
        <p>Descargá <span className='negrita'>TEA</span>YUDO y abrí la puerta a un futuro lleno de posibilidades.</p>
        <h3>¡Juntos podemos hacer la diferencia!</h3>
      </div>
      <div className="gpt3__cta-button">
        <button type='button'>Descargá la app</button>
      </div>
    </div>
  )
}

export default CTA
