import { FileText, Stethoscope, ClipboardCheck, Package, Phone, ArrowRight } from 'lucide-react';
import './Conventions.css';

const STEPS = [
  {
    num: '01',
    icon: <Stethoscope size={28} />,
    title: 'Visita del medico curante',
    desc: 'Chiedi al tuo medico di base o allo specialista una prescrizione per l\'ausilio di cui hai bisogno. La visita è gratuita con il SSN.',
  },
  {
    num: '02',
    icon: <FileText size={28} />,
    title: 'Autorizzazione ATS Milano',
    desc: 'Con la prescrizione in mano, l\'ATS Milano Città Metropolitana verificherà il diritto all\'ausilio e rilascerà l\'autorizzazione.',
  },
  {
    num: '03',
    icon: <ClipboardCheck size={28} />,
    title: 'Contattaci con i documenti',
    desc: 'Portaci o inviaci l\'autorizzazione ATS. Verificheremo rapidamente i documenti e ti guideremo nella scelta dell\'ausilio più adatto.',
  },
  {
    num: '04',
    icon: <Package size={28} />,
    title: 'Consegna gratuita',
    desc: 'L\'ausilio verrà consegnato a domicilio o in ospedale completamente a carico del SSN. In molti casi entro 24 ore dall\'autorizzazione.',
  },
];

const ENTI = [
  { name: 'SSN', full: 'Servizio Sanitario Nazionale', color: 'teal' },
  { name: 'ATS', full: 'ATS Milano Città Metropolitana', color: 'navy' },
  { name: 'INAIL', full: 'Istituto Naz. Assicurazione Infortuni sul Lavoro', color: 'teal' },
  { name: 'ASL', full: 'Azienda Sanitaria Locale', color: 'navy' },
];

export default function Conventions() {
  const waUrl = 'https://wa.me/393351807280?text=' + encodeURIComponent('Buongiorno, ho bisogno di informazioni sulle convenzioni ASL/INAIL.');

  return (
    <section className="section section-navy" id="convenzioni" aria-labelledby="conv-title">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Come ottenere ausili gratis</span>
          <h2 className="section-title" id="conv-title">
            Convenzioni ASL e INAIL:<br />l'ausilio te lo paga il SSN
          </h2>
          <p className="section-subtitle">
            Molti non sanno che hanno diritto a ricevere ausili ortopedici gratuitamente o a costi ridotti 
            tramite il Servizio Sanitario Nazionale. Segui questi 4 semplici passaggi.
          </p>
        </header>

        {/* Enti badges */}
        <div className="conv__badges">
          {ENTI.map(e => (
            <div key={e.name} className={`conv__badge conv__badge--${e.color}`}>
              <strong>{e.name}</strong>
              <span>{e.full}</span>
            </div>
          ))}
        </div>

        {/* Steps timeline */}
        <ol className="conv__steps" aria-label="Procedura per ottenere ausili tramite SSN">
          {STEPS.map((step, idx) => (
            <li key={step.num} className="conv__step">
              <div className="conv__step-number">{step.num}</div>
              {idx < STEPS.length - 1 && <div className="conv__step-connector" aria-hidden="true" />}
              <div className="conv__step-icon">{step.icon}</div>
              <div className="conv__step-content">
                <h3 className="conv__step-title">{step.title}</h3>
                <p className="conv__step-desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA box */}
        <div className="conv__cta-box">
          <div className="conv__cta-text">
            <h3>Hai dubbi sulla tua situazione?</h3>
            <p>Il nostro personale è specializzato nelle pratiche ASL e INAIL. 
               Contattaci: ti guideremo gratuitamente in ogni passaggio.</p>
          </div>
          <div className="conv__cta-actions">
            <a href="tel:+390299914209" className="btn btn-secondary btn-lg">
              <Phone size={20} /> 02 9991 4209
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
               className="btn btn-whatsapp btn-lg" id="conv-whatsapp-btn">
              Scrivici su WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
