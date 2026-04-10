import { Home, Hospital, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    id: 'domiciliare',
    icon: <Home size={36} />,
    title: 'Assistenza Domiciliare',
    subtitle: 'Il nostro operatore arriva a casa tua',
    image: '/domiciliare.png',
    imageAlt: 'Operatore ortopedico assiste anziano a domicilio',
    features: [
      'Consegna e montaggio entro 24 ore',
      "Prova e regolazione dell'ausilio a casa",
      "Valutazione gratuita dell'ambiente domestico",
      'Ritiro e sostituzione in qualsiasi momento',
      'Servizio attivo a Sesto S.G. e Cinisello B.',
    ],
    cta: { label: 'Richiedi a domicilio', href: '#contatti' },
    accent: 'teal',
  },
  {
    id: 'ospedaliero',
    icon: <Hospital size={36} />,
    title: 'Assistenza Ospedaliera',
    subtitle: 'Direttamente in reparto, senza spostamenti',
    image: '/ospedaliero.png',
    imageAlt: 'Operatore ortopedico con carrozzina in corsia ospedaliera',
    features: [
      "Consegna in reparto all'Ospedale Bassini",
      "Servizio attivo all'Ospedale Civile di Sesto",
      'Coordinamento diretto con il personale medico',
      'Ausili pronti per le dimissioni ospedaliere',
      'Risposta rapida alle richieste urgenti',
    ],
    cta: { label: 'Servizio ospedaliero', href: '#contatti' },
    accent: 'navy',
  },
];

export default function Services() {
  return (
    <section className="section" id="servizi" aria-labelledby="servizi-title">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Come operiamo</span>
          <h2 className="section-title" id="servizi-title">
            Due modalità di servizio,<br />una sola promessa: velocità
          </h2>
          <p className="section-subtitle">
            Che tu sia a casa o in ospedale, il nostro team è pronto a portarti l'ausilio 
            di cui hai bisogno, già regolato e pronto all'uso.
          </p>
        </header>

        <div className="services__grid">
          {SERVICES.map(svc => (
            <article key={svc.id} className={`service-card service-card--${svc.accent}`} id={`servizio-${svc.id}`}>
              <div className="service-card__image">
                <img src={svc.image} alt={svc.imageAlt} loading="lazy" />
                <div className="service-card__image-overlay" />
                <div className={`service-card__icon service-card__icon--${svc.accent}`}>
                  {svc.icon}
                </div>
              </div>

              <div className="service-card__body">
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__subtitle">{svc.subtitle}</p>

                <ul className="service-card__features">
                  {svc.features.map((f, i) => (
                    <li key={i} className="service-card__feature">
                      <CheckCircle2 size={18} className={`feature-icon feature-icon--${svc.accent}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="service-card__footer">
                  <div className="service-card__time">
                    <Clock size={16} />
                    Risposta garantita in 24h
                  </div>
                  <a href={svc.cta.href} className={`btn service-card__cta service-card__cta--${svc.accent}`}>
                    {svc.cta.label} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
