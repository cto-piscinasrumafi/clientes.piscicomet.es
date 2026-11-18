import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceso empresas',
}

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-backdrop" aria-hidden="true"><span /><span /><span /></div>
      <div className="login-wrap">
        <Link className="brand login-brand" href="/" aria-label="Piscicomet para profesionales, volver al inicio">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none"><path d="M4 18c4.2 0 4.2-5 8.4-5s4.2 5 8.4 5 4.2-5 8.4-5M4 25c4.2 0 4.2-5 8.4-5s4.2 5 8.4 5 4.2-5 8.4-5M8 9.5h16" /></svg>
          </span>
          <span className="brand-name">Piscicomet<span className="brand-context">Empresas</span></span>
        </Link>
        <section className="login-card">
          <span className="login-icon" aria-hidden="true">↗</span>
          <span className="eyebrow">Área profesional</span>
          <h1>Acceso empresas</h1>
          <p>Estamos preparando el espacio privado para las empresas colaboradoras de Piscicomet.</p>
          <div className="login-placeholder" role="status">
            <strong>El acceso estará disponible más adelante.</strong>
            <span>La gestión segura de cuentas se añadirá en una próxima fase.</span>
          </div>
          <a className="button button-primary login-contact" href="mailto:info@piscicomet.es?subject=Acceso%20empresas">
            Consultar con Piscicomet <span aria-hidden="true">↗</span>
          </a>
          <Link className="back-link" href="/">Volver a la landing <span aria-hidden="true">→</span></Link>
        </section>
        <p className="login-footnote">Acceso destinado a empresas colaboradoras.</p>
      </div>
    </main>
  )
}
