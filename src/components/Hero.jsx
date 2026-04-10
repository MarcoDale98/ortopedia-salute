import { Phone, MessageCircle, ChevronDown, Clock, Star } from 'lucide-react';
import './Hero.css';

const WA_HREF = 'https://wa.me/393351807280?text=' + encodeURIComponent('Buongiorno, vorrei richiedere un preventivo ausili.');

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Sezione principale">
      {/* Background image with overlay */}
      <div className="hero__bg">
        <img src="/hero.png" alt="Operatore ortopedico consegna ausili a domicilio" 
             loading="eager" fetchPriority="high" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        {/* Trust badge */}
        <div className="hero__badges">
          <span className="badge badge-amber">
            <Star size={13} fill="currentColor" /> Convenzionati ATS Milano
          </span>
          <span className="badge badge-amber">
            ASL · INAIL · SSN
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero__title">
          L'Ortopedia che<br />
          <span className="hero__title-accent">viene da te</span><br />
          a casa o in corsia
        </h1>

        <p className="hero__subtitle">
          Consegna e prova ausili in <strong>24 ore</strong> a domicilio o direttamente 
          in reparto all'Ospedale Bassini e all'Ospedale Civile di Sesto San Giovanni.
          Sesto San Giovanni · Cinisello Balsamo.
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <a href="#catalogo" className="btn btn-primary btn-lg" id="hero-preventivo-btn">
            Richiedi Preventivo Gratuito
          </a>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
             className="btn btn-whatsapp btn-lg" id="hero-whatsapp-btn">
            <MessageCircle size={22} />
            WhatsApp Emergenze
          </a>
        </div>

        {/* Quick stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">24h</span>
            <span className="hero__stat-label">Consegna</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">2</span>
            <span className="hero__stat-label">Sedi attive</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">10+</span>
            <span className="hero__stat-label">Anni di esperienza</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <a href="tel:+390299914209" className="hero__stat-phone">
              <Phone size={16} />
              02 9991 4209
            </a>
            <span className="hero__stat-label">Chiamaci ora</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#servizi" className="hero__scroll" aria-label="Scorri verso il basso">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
