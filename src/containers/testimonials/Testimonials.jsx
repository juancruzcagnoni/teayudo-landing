import React from 'react'
import './testimonials.css'
import stars5 from '../../assets/testimonials/stars-5.svg'
import stars4 from '../../assets/testimonials/stars-4.svg'

const testimonials = [
  {
    text: "¡Excelente servicio! Estoy muy satisfecho con los resultados.",
    name: "Juan Pérez",
    stars: stars4
  },
  {
    text: "Increíble experiencia. Nunca pensé que fuera tan fácil.",
    name: "María González",
    stars: stars5
  },
  {
    text: "Recomiendo totalmente. El equipo es muy profesional y amigable.",
    name: "Carlos Rodríguez",
    stars: stars4
  },
  {
    text: "¡Me encanta! Superó todas mis expectativas.",
    name: "Ana Martínez",
    stars: stars4
  },
  {
    text: "Lo mejor que probé en mi vida. Definitivamente llego para quedarse.",
    name: "Luisa Sánchez",
    stars: stars4
  },
  {
    text: "Fantástico. No puedo esperar para usarlo de nuevo.",
    name: "Pedro Gómez",
    stars: stars5
  }
];


const Testimonials = () => {
  return (
    <section className="testimonials-section section__padding" id='testimonials'>
      <div className="testimonials-header" data-aos="fade-up">
        <span>TESTIMONIOS</span>
        <h2>Mas de 100 personas ya confían en nosotros  </h2>
        <p>¡Leé lo que nuestros clientes tienen para decir!</p>
      </div>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card" data-aos="fade-up">
            <p className='tesimonial'>{testimonial.text}</p>
            <div className="testimonial-author">
              {/* <img src={testimonialImages[index]} alt={`Testimonio de ${testimonial.name}`} /> */}
              <p>{testimonial.name}</p>
              <img src={testimonial.stars} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
