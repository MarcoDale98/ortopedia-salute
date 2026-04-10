import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import './Locations.css';

const HOURS = [
  { day: 'Lunedì', time: '09:00–13:00 / 15:00–19:00' },
  { day: 'Martedì', time: '09:00–13:00 / 15:00–19:00' },
  { day: 'Mercoledì', time: '09:00–13:00 / 15:00–19:00' },
  { day: 'Giovedì', time: '09:00–13:00 / 15:00–19:00' },
  { day: 'Venerdì', time: '09:00–13:00 / 15:00–19:00' },
  { day: 'Sabato', time: '09:00–13:00 / 15:00–19:00' },
  { day: 'Domenica', time: 'Chiuso', closed: true },
];

const SHOPS = [
  {
    id: 'sesto',
    name: 'Sesto San Giovanni',
    address: 'Viale Fratelli Casiraghi, 167',
    city: '20099 Sesto San Giovanni (MI)',
    mapUrl: 'https://maps.google.com/?q=Viale+Fratelli+Casiraghi+167+Sesto+San+Giovanni+MI',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5!2d9.2298!3d45.5357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlhbGUgRnJhdGVsbGkgQ2FzaXJhZ2hpLCAxNjcsIFNlc3RvIFNhbiBHaW92YW5uaQ!5e0!3m2!1sit!2sit!4v1',
    color: 'teal',
    nearby: 'Vicino all\'Ospedale Bassini',
  },
  {
    id: 'cinisello',
    name: 'Cinisello Balsamo',
    address: 'Via Libertà, 75',
    city: '20092 Cinisello Balsamo (MI)',
    mapUrl: 'https://maps.google.com/?q=Via+Libertà+75+Cinisello+Balsamo+MI',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5!2d9.2111!3d45.5566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlhIExpYmVydMOgLCA3NSwgQ2luaXNlbGxvIEJhbHNhbW8!5e0!3m2!1sit!2sit!4v1',
    color: 'navy',
    nearby: 'Vicino all\'Ospedale Civile di Sesto',
  },
];

export default function Locations() {
  return (
    <section className="section section-alt" id="sedi" aria-labelledby="sedi-title">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Dove siamo</span>
          <h2 className="section-title" id="sedi-title">
            Due sedi nel cuore del Nord Milano
          </h2>
          <p className="section-subtitle">
            Trovaci a Sesto San Giovanni e Cinisello Balsamo. 
            Aperto sei giorni su sette, con consegna attiva anche nelle giornate di chiusura.
          </p>
        </header>

        <div className="locations__grid">
          {SHOPS.map(shop => (
            <article key={shop.id} className={`location-card location-card--${shop.color}`} id={`sede-${shop.id}`}>
              {/* Map embed */}
              <div className="location-card__map">
                <iframe
                  title={`Mappa sede di ${shop.name}`}
                  src={shop.embedUrl}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="location-card__body">
                <div className={`location-card__badge location-card__badge--${shop.color}`}>
                  <MapPin size={14} />
                  Sede di {shop.name}
                </div>

                <h3 className="location-card__title">{shop.name}</h3>

                <address className="location-card__address">
                  <p className="location-card__street">{shop.address}</p>
                  <p className="location-card__city">{shop.city}</p>
                </address>

                <p className="location-card__nearby">
                  📍 {shop.nearby}
                </p>

                {/* Hours */}
                <div className="location-card__hours">
                  <div className="location-hours-header">
                    <Clock size={16} />
                    <span>Orari di apertura</span>
                  </div>
                  <ul className="location-hours-list">
                    {HOURS.map(h => (
                      <li key={h.day} className={`location-hour-row${h.closed ? ' location-hour-row--closed' : ''}`}>
                        <span className="location-hour-day">{h.day}</span>
                        <span className="location-hour-time">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="location-card__actions">
                  <a href={`tel:+390299914209`} className="btn btn-sm location-card__btn-call">
                    <Phone size={16} /> 02 9991 4209
                  </a>
                  <a href={shop.mapUrl} target="_blank" rel="noopener noreferrer"
                     className={`btn btn-sm location-card__btn-map location-card__btn-map--${shop.color}`}>
                    <ExternalLink size={16} /> Indicazioni stradali
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
