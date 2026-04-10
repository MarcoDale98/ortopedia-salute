import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQS = [
  {
    q: 'La consegna a domicilio è davvero gratuita?',
    a: 'Sì. La consegna a domicilio è inclusa nel servizio per tutti gli ausili acquistati o noleggiati. Operiamo su Sesto San Giovanni, Cinisello Balsamo e aree limitrofe.',
  },
  {
    q: 'Posso noleggiare un ausilio invece di acquistarlo?',
    a: 'Assolutamente sì. Offriamo noleggio a breve e lungo termine per letti ortopedici, carrozzine, materassi antidecubito e molti altri ausili. Il noleggio è ideale per ricoveri temporanei o periodi di convalescenza.',
  },
  {
    q: 'Cosa significa "ausilio in convenzione ASL"?',
    a: 'Significa che il costo dell\'ausilio è interamente o parzialmente coperto dal Servizio Sanitario Nazionale. Per accedere alla convenzione è necessaria una prescrizione medica e l\'autorizzazione dell\'ATS Milano. Il nostro personale ti guida gratuitamente in tutto il processo.',
  },
  {
    q: 'Lavorate anche con INAIL?',
    a: 'Sì, siamo convenzionati con INAIL per l\'erogazione di ausili ortopedici a persone vittime di infortuni sul lavoro. Contattaci con la documentazione INAIL e provvederemo a tutto il resto.',
  },
  {
    q: 'Consegnate anche in ospedale?',
    a: 'Sì. Consegniamo direttamente in reparto all\'Ospedale Bassini di Sesto San Giovanni e all\'Ospedale Civile di Sesto. Il servizio è particolarmente utile per organizzare le dimissioni ospedaliere.',
  },
  {
    q: 'Quanto tempo serve per la consegna urgente?',
    a: 'Per le richieste urgenti, il nostro obiettivo è consegnare entro 24 ore dalla conferma dell\'ordine. In caso di emergenza, contattaci subito via WhatsApp al +39 335 180 7280.',
  },
  {
    q: 'Montate voi gli ausili a casa?',
    a: 'Sì. Il nostro personale si occupa del montaggio, della regolazione e della prova dell\'ausilio direttamente a domicilio, assicurandosi che tutto sia corretto e sicuro per il paziente.',
  },
  {
    q: 'Come funziona il sistema di preventivo via WhatsApp?',
    a: 'Seleziona gli ausili dal nostro catalogo online, aggiungi quelli che ti interessano al preventivo e inviaci la lista via WhatsApp. Il nostro team ti risponderà con prezzi, disponibilità e informazioni sulle convenzioni applicabili.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <ChevronDown className="faq-item__icon" size={20} />
      </button>
      <div className="faq-item__answer" aria-hidden={!isOpen}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Hai domande?</span>
          <h2 className="section-title" id="faq-title">
            Domande frequenti
          </h2>
          <p className="section-subtitle">
            Trova risposte rapide alle domande più comuni. 
            Se non trovi quello che cerchi, chiamaci o scrivici su WhatsApp.
          </p>
        </header>

        <div className="faq__list" role="list">
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
