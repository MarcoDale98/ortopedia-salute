import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span>🩼</span>
              <span>Ortopedia<strong>Salute</strong></span>
            </div>
            <p className="footer__tagline">
              Ausili ortopedici a domicilio e in ospedale. 
              Veloci, professionali, convenzionati.
            </p>
            <div className="footer__badges-small">
              <span>ASL</span>
              <span>INAIL</span>
              <span>ATS Milano</span>
              <span>SSN</span>
            </div>
          </div>

          {/* Sede Sesto */}
          <div className="footer__col">
            <h3 className="footer__col-title">Sede Sesto San Giovanni</h3>
            <address className="footer__address">
              <p><MapPin size={14} /> Viale Fratelli Casiraghi, 167</p>
              <p>20099 Sesto San Giovanni (MI)</p>
            </address>
            <a href="https://maps.google.com/?q=Viale+Fratelli+Casiraghi+167+Sesto+San+Giovanni"
               target="_blank" rel="noopener noreferrer" className="footer__map-link">
              <ExternalLink size={13} /> Indicazioni
            </a>
          </div>

          {/* Sede Cinisello */}
          <div className="footer__col">
            <h3 className="footer__col-title">Sede Cinisello Balsamo</h3>
            <address className="footer__address">
              <p><MapPin size={14} /> Via Libertà, 75</p>
              <p>20092 Cinisello Balsamo (MI)</p>
            </address>
            <a href="https://maps.google.com/?q=Via+Libertà+75+Cinisello+Balsamo"
               target="_blank" rel="noopener noreferrer" className="footer__map-link">
              <ExternalLink size={13} /> Indicazioni
            </a>
          </div>

          {/* Contatti & Orari */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contatti</h3>
            <div className="footer__contacts">
              <a href="tel:+390299914209" className="footer__contact-link">
                <Phone size={15} /> 02 9991 4209
              </a>
              <a href="https://wa.me/393351807280" target="_blank" rel="noopener noreferrer"
                 className="footer__contact-link footer__contact-link--wa">
                <MessageCircle size={15} /> +39 335 180 7280
              </a>
            </div>
            <div className="footer__hours">
              <div className="footer__hours-header">
                <Clock size={13} /> Orari
              </div>
              <p>Lun – Sab: 09:00–13:00 / 15:00–19:00</p>
              <p className="footer__closed">Domenica: Chiuso</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__legal">
            © {currentYear} Salute S.R.L. – P.IVA 13416970963 · REA MI-2721630
            <br />
            Sede legale: Piazza Giuseppe Grandi, 5 – 20129 Milano (MI)
          </p>
          <div className="footer__links">
            <a href="/privacy">Privacy Policy</a>
            <span>·</span>
            <a href="/cookie">Cookie Policy</a>
            <span>·</span>
            <a href="#top">Torna in cima ↑</a>
          </div>
        </div>

        {/* Powered by ONET */}
        <div className="footer__powered">
          <a
            href="https://onet-italia.it"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__powered-link"
          >
            Powered by <strong>ONET</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
