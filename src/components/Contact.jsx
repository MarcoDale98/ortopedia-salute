import { useState } from 'react';
import { MessageCircle, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './Contact.css';

const COMUNI = [
  'Sesto San Giovanni',
  'Cinisello Balsamo',
  'Monza',
  'Milano',
  'Bresso',
  'Cologno Monzese',
  'Muggiò',
  'Vimodrone',
  'Altro',
];

/**
 * Contact — Form preventivo/contatto con validazione e redirect WhatsApp.
 * @param {object} props.cart - Hook useCart per includere prodotti selezionati nel messaggio
 */
export default function Contact({ cart }) {
  const [form, setForm] = useState({ nome: '', telefono: '', comune: '', messaggio: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  /** Validazione client-side */
  const validate = () => {
    const e = {};
    if (!form.nome.trim() || form.nome.trim().length < 2) e.nome = 'Inserisci il tuo nome (min. 2 caratteri)';
    if (!form.telefono.trim() || !/^[\d\s\+\-\(\)]{7,15}$/.test(form.telefono)) e.telefono = 'Inserisci un numero di telefono valido';
    if (!form.comune) e.comune = 'Seleziona il tuo comune';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    // Redirect WhatsApp con dati form + prodotti selezionati
    const waUrl = cart.buildWhatsappUrl(form);
    setTimeout(() => window.open(waUrl, '_blank', 'noopener,noreferrer'), 400);
  };

  if (submitted) {
    return (
      <section className="section section-alt" id="contatti">
        <div className="container">
          <div className="contact__success">
            <CheckCircle2 size={60} className="contact__success-icon" />
            <h2>Richiesta inviata!</h2>
            <p>Stai per essere reindirizzato su WhatsApp con il tuo messaggio pre-compilato. 
               Risponderemo entro poche ore.</p>
            <button onClick={() => { setSubmitted(false); setForm({ nome:'', telefono:'', comune:'', messaggio:'' }); }}
                    className="btn btn-primary">
              Invia un'altra richiesta
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-alt" id="contatti" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__layout">
          {/* Left: info */}
          <div className="contact__info">
            <span className="section-eyebrow">Contattaci</span>
            <h2 className="contact__title" id="contact-title">
              Richiedi il tuo<br />preventivo gratuito
            </h2>
            <p className="contact__subtitle">
              Compila il modulo e ti risponderemo via WhatsApp con un preventivo personalizzato. 
              Nessun impegno, nessun costo.
            </p>

            <div className="contact__channels">
              <a href="tel:+390299914209" className="contact__channel">
                <div className="contact__channel-icon contact__channel-icon--navy">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="contact__channel-label">Chiamaci</p>
                  <p className="contact__channel-value">02 9991 4209</p>
                  <p className="contact__channel-hours">Lun–Sab · 09:00–13:00 / 15:00–19:00</p>
                </div>
              </a>

              <a href="https://wa.me/393351807280" target="_blank" rel="noopener noreferrer"
                 className="contact__channel">
                <div className="contact__channel-icon contact__channel-icon--green">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="contact__channel-label">WhatsApp Emergenze</p>
                  <p className="contact__channel-value">+39 335 180 7280</p>
                  <p className="contact__channel-hours">Risposta rapida · Anche fuori orario</p>
                </div>
              </a>
            </div>

            {/* Selected products recap */}
            {cart.count > 0 && (
              <div className="contact__cart-recap">
                <p className="contact__cart-recap-title">
                  🛒 Ausili nel preventivo ({cart.count}):
                </p>
                <ul className="contact__cart-list">
                  {cart.items.map(item => (
                    <li key={item.id}>{item.icon} {item.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: form */}
          <div className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit} noValidate aria-label="Form preventivo">
              <div className={`form-field${errors.nome ? ' form-field--error' : ''}`}>
                <label htmlFor="contact-nome" className="form-label">Nome e Cognome *</label>
                <input
                  id="contact-nome"
                  type="text"
                  className="form-input"
                  placeholder="Es. Mario Rossi"
                  value={form.nome}
                  onChange={e => update('nome', e.target.value)}
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.nome ? 'err-nome' : undefined}
                />
                {errors.nome && <p id="err-nome" className="form-error" role="alert"><AlertCircle size={14} /> {errors.nome}</p>}
              </div>

              <div className={`form-field${errors.telefono ? ' form-field--error' : ''}`}>
                <label htmlFor="contact-tel" className="form-label">Numero di telefono *</label>
                <input
                  id="contact-tel"
                  type="tel"
                  className="form-input"
                  placeholder="Es. 02 1234567 oppure 333 1234567"
                  value={form.telefono}
                  onChange={e => update('telefono', e.target.value)}
                  autoComplete="tel"
                  aria-required="true"
                  aria-describedby={errors.telefono ? 'err-tel' : undefined}
                />
                {errors.telefono && <p id="err-tel" className="form-error" role="alert"><AlertCircle size={14} /> {errors.telefono}</p>}
              </div>

              <div className={`form-field${errors.comune ? ' form-field--error' : ''}`}>
                <label htmlFor="contact-comune" className="form-label">Comune *</label>
                <select
                  id="contact-comune"
                  className="form-input form-select"
                  value={form.comune}
                  onChange={e => update('comune', e.target.value)}
                  aria-required="true"
                  aria-describedby={errors.comune ? 'err-comune' : undefined}
                >
                  <option value="">Seleziona il tuo comune...</option>
                  {COMUNI.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.comune && <p id="err-comune" className="form-error" role="alert"><AlertCircle size={14} /> {errors.comune}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="contact-msg" className="form-label">Messaggio (opzionale)</label>
                <textarea
                  id="contact-msg"
                  className="form-input form-textarea"
                  placeholder="Descrivi brevemente la tua situazione o le tue esigenze..."
                  value={form.messaggio}
                  onChange={e => update('messaggio', e.target.value)}
                  rows={4}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg contact__submit" id="contact-submit-btn">
                <Send size={20} />
                Invia richiesta su WhatsApp
              </button>

              <p className="contact__privacy">
                Inviando la richiesta accetti la nostra{' '}
                <a href="/privacy" style={{ color: 'var(--teal)', textDecoration: 'underline' }}>
                  Privacy Policy
                </a>. I tuoi dati non verranno ceduti a terzi.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
