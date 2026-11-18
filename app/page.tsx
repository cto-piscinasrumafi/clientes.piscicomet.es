import Link from 'next/link'

const opportunities = [
  {
    number: '01',
    title: 'Construcción',
    text: 'Proyectos de piscina nueva, desde la definición inicial hasta la elección del sistema constructivo.',
    icon: '◫',
  },
  {
    number: '02',
    title: 'Reformas y reparación',
    text: 'Rehabilitación de piscinas, mejoras del vaso y consultas sobre averías o pérdidas de agua.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Cubiertas',
    text: 'Solicitudes de instalación de cubiertas para proteger la piscina o ampliar su temporada de uso.',
    icon: '⌂',
  },
  {
    number: '04',
    title: 'Equipamiento',
    text: 'Proyectos relacionados con depuración, climatización y otros elementos de la instalación.',
    icon: '◎',
  },
]

const steps = [
  {
    number: '01',
    title: 'Nos cuentas qué haces',
    text: 'Indícanos tus especialidades y las zonas en las que trabajas. Revisaremos contigo las condiciones antes de iniciar la colaboración.',
  },
  {
    number: '02',
    title: 'Valoras cada oportunidad',
    text: 'Te enviaremos un resumen sin datos de contacto cuando encontremos una solicitud que pueda encajar con tu actividad.',
  },
  {
    number: '03',
    title: 'Decides si quieres atenderla',
    text: 'Si te interesa, podrás aceptar la solicitud y recibir los datos necesarios para preparar tu propuesta al cliente.',
  },
]

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Piscicomet para profesionales, inicio">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M4 18c4.2 0 4.2-5 8.4-5s4.2 5 8.4 5 4.2-5 8.4-5" />
                <path d="M4 25c4.2 0 4.2-5 8.4-5s4.2 5 8.4 5 4.2-5 8.4-5" />
                <path d="M8 9.5h16" />
              </svg>
            </span>
            <span className="brand-name">Piscicomet<span className="brand-context">Empresas</span></span>
          </Link>
          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#oportunidades">Oportunidades</a>
            <Link className="nav-login" href="/login">Acceso empresas <span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><span className="eyebrow-dot" />Un canal para profesionales de piscinas</span>
              <h1>Proyectos que encajan con <span>tu especialidad.</span></h1>
              <p className="hero-lead">
                Piscicomet conecta solicitudes de construcción, reformas, cubiertas y equipamiento con profesionales que trabajan en esas zonas.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="mailto:info@piscicomet.es?subject=Colaboraci%C3%B3n%20profesional">
                  Hablar de colaboración <span aria-hidden="true">↗</span>
                </a>
                <Link className="button-link" href="/login">Ya tengo acceso <span aria-hidden="true">→</span></Link>
              </div>
              <p className="hero-note"><span aria-hidden="true">✓</span> Tú decides qué solicitudes quieres atender.</p>
            </div>
            <div className="hero-art" aria-label="Ilustración de una piscina y una solicitud profesional">
              <div className="water-card">
                <div className="water-lines" />
                <div className="pool-outline"><span className="pool-step pool-step-one" /><span className="pool-step pool-step-two" /><span className="pool-step pool-step-three" /></div>
                <div className="request-card">
                  <span className="request-badge"><span /> Nueva solicitud</span>
                  <strong>Reforma de piscina</strong>
                  <span className="request-meta">Zona de trabajo · Resumen inicial</span>
                  <span className="request-footer"><span className="request-line" /><span className="request-action">Valorar <b>→</b></span></span>
                </div>
                <span className="art-spark spark-one" aria-hidden="true">✳</span>
                <span className="art-spark spark-two" aria-hidden="true">✳</span>
              </div>
              <p className="art-caption">Primero conoces la solicitud. Después decides.</p>
            </div>
          </div>
        </section>

        <section className="intro-section section-space">
          <div className="container intro-grid">
            <div>
              <span className="eyebrow">Colaboración con criterio</span>
              <h2>Un proceso claro antes de cada contacto.</h2>
            </div>
            <div className="intro-copy">
              <p>Recogemos solicitudes de personas que quieren construir, renovar o mejorar su piscina. Revisamos la información y buscamos profesionales cuya actividad y zona puedan coincidir.</p>
              <p>La disponibilidad depende de la demanda, el tipo de trabajo y las empresas activas en cada lugar. No prometemos un número concreto de oportunidades.</p>
            </div>
          </div>
        </section>

        <section className="steps-section section-space" id="como-funciona">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Cómo funciona</span>
              <h2>De tu especialidad a una oportunidad que puedes valorar.</h2>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div className="step-rule" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="opportunities-section section-space" id="oportunidades">
          <div className="container">
            <div className="section-heading opportunities-heading">
              <div>
                <span className="eyebrow">Tipos de proyecto</span>
                <h2>Trabajo de piscina, en distintas etapas.</h2>
              </div>
              <p>Cuéntanos qué trabajos realizas para que podamos revisar si una solicitud encaja con tus servicios.</p>
            </div>
            <div className="opportunity-grid">
              {opportunities.map((item) => (
                <article className="opportunity-card" key={item.number}>
                  <span className="opportunity-top"><span>{item.number}</span><span className="opportunity-icon" aria-hidden="true">{item.icon}</span></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="conditions-section">
          <div className="container conditions-grid">
            <div>
              <span className="eyebrow eyebrow-light">Sin letra pequeña</span>
              <h2>Primero acordamos las condiciones. Tú conservas la decisión.</h2>
              <p>Enviar una consulta no tiene coste ni te obliga a contratar. El precio y las condiciones de las solicitudes aceptadas se pactan contigo antes de empezar.</p>
            </div>
            <ul className="conditions-list">
              <li><span>✓</span><div><strong>Revisas cada resumen</strong><small>Recibes una primera descripción sin datos de contacto.</small></div></li>
              <li><span>✓</span><div><strong>Eliges si te interesa</strong><small>No tienes que aceptar todas las oportunidades.</small></div></li>
              <li><span>✓</span><div><strong>Conoces las condiciones</strong><small>Acordamos contigo el precio antes de iniciar.</small></div></li>
            </ul>
          </div>
        </section>

        <section className="faq-section section-space">
          <div className="container faq-grid">
            <div className="section-heading">
              <span className="eyebrow">Preguntas frecuentes</span>
              <h2>Antes de colaborar.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>¿Tengo que aceptar todas las solicitudes?</summary>
                <p>No. Puedes revisar cada resumen y decidir si quieres recibir los datos completos de esa persona.</p>
              </details>
              <details>
                <summary>¿Cuánto cuesta cada solicitud?</summary>
                <p>El precio y las condiciones se acuerdan contigo antes de comenzar. Enviar la consulta de colaboración no tiene coste.</p>
              </details>
              <details>
                <summary>¿Hay un número mínimo de oportunidades?</summary>
                <p>No garantizamos un volumen concreto. Depende de la demanda, tus especialidades y las zonas en las que trabajas.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="container contact-inner">
            <div>
              <span className="eyebrow eyebrow-light">Hablemos de tu empresa</span>
              <h2>Cuéntanos dónde trabajas y qué proyectos realizas.</h2>
            </div>
            <a className="button button-light" href="mailto:info@piscicomet.es?subject=Colaboraci%C3%B3n%20profesional">
              Escribir a Piscicomet <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none"><path d="M4 18c4.2 0 4.2-5 8.4-5s4.2 5 8.4 5 4.2-5 8.4-5M4 25c4.2 0 4.2-5 8.4-5s4.2 5 8.4 5 4.2-5 8.4-5M8 9.5h16" /></svg>
            </span>
            <span className="brand-name">Piscicomet<span className="brand-context">Empresas</span></span>
          </Link>
          <p>Canal de colaboración para profesionales de piscinas.</p>
          <div className="footer-links"><a href="mailto:info@piscicomet.es">info@piscicomet.es</a><Link href="/login">Acceso empresas</Link></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Piscicomet</span><span>Información para profesionales de piscinas.</span></div>
      </footer>
    </>
  )
}
