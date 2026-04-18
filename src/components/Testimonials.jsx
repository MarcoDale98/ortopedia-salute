import { Star } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Maria',
    role: 'Caregiver di suo padre, 82 anni',
    city: 'Sesto San Giovanni',
    stars: 5,
    text: "Quando mio padre è stato dimesso dall'Ospedale Bassini, ho chiamato Ortopedia Salute alle 9 di mattina e il letto ortopedico era già montato in casa sua alle 16. Un servizio incredibile, personale gentile e disponibile.",
  },
  {
    id: 2,
    name: 'Giorgio',
    role: 'Paziente post-operatorio',
    city: 'Cinisello Balsamo',
    stars: 5,
    text: "Dopo l'intervento al ginocchio, il mio fisiatra mi ha consigliato Ortopedia Salute per il tutore e le stampelle. Mi hanno spiegato come funzionava la pratica INAIL e ho avuto tutto gratis. Professionalità al top.",
  },
  {
    id: 3,
    name: 'Luisa',
    role: 'Figlia di paziente anziana',
    city: 'Sesto San Giovanni',
    stars: 5,
    text: 'Mia madre non riusciva più a fare la doccia in sicurezza. Abbiamo chiamato e nel giro di un giorno avevamo la sedia da doccia e le maniglie montate. Finalmente serena. Grazie di cuore!',
  },
  {
    id: 4,
    name: 'Roberto',
    role: 'Ex paziente Ospedale Civile',
    city: 'Cinisello Balsamo',
    stars: 5,
    text: "Ho scoperto solo grazie a loro che avevo diritto alla carrozzina elettrica tramite l'ASL. Mi hanno seguito in tutta la pratica senza costi aggiuntivi. Sono i migliori della zona, senza dubbio.",
  },
];

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} stelle su 5`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={16} fill="#f4a200" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section section-alt" id="recensioni" aria-labelledby="recens-title">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Cosa dicono i nostri clienti</span>
          <h2 className="section-title" id="recens-title">
            La loro soddisfazione<br />è la nostra missione
          </h2>
          <p className="section-subtitle">
            Ogni giorno aiutiamo famiglie e pazienti della zona a ritrovare autonomia e serenità.
          </p>
        </header>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(t => (
            <article key={t.id} className="testimonial-card" id={`recensione-${t.id}`}>
              <Stars count={t.stars} />
              <blockquote className="testimonial-card__text">"{t.text}"</blockquote>
              <footer className="testimonial-card__author">
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role} · {t.city}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="testimonials__more text-center mt-8">
          <p className="text-muted">Vuoi leggere altre recensioni?</p>
          <a
            href="https://maps.google.com/?q=Ortopedia+Salute+Sesto+San+Giovanni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-4"
            style={{ background: 'transparent', color: 'var(--navy)', border: '2px solid var(--border)' }}
          >
            Vedi le recensioni su Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
