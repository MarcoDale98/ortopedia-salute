import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import './Header.css';

const PHONE_DISPLAY = '02 9991 4209';
const PHONE_HREF = 'tel:+390299914209';
const WA_HREF = 'https://wa.me/393351807280?text=' + encodeURIComponent('Buongiorno, ho bisogno di assistenza urgente.');

const NAV_LINKS = [
  { href: '#servizi',      label: 'Servizi' },
  { href: '#sedi',         label: 'Le nostre sedi' },
  { href: '#catalogo',     label: 'Ausili' },
  { href: '#convenzioni',  label: 'Convenzioni' },
  { href: '#contatti',     label: 'Contatti' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="container header__inner">
          {/* Logo */}
          <a href="#top" className="header__logo" aria-label="Ortopedia Salute – torna in cima">
            <img src="/logo.png" alt="Ortopedia Salute S.r.l." className="header__logo-img" />
          </a>

          {/* Desktop nav */}
          <nav className="header__nav" aria-label="Navigazione principale">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="header__link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="header__ctas">
            <a href={PHONE_HREF} className="header__phone" aria-label={`Chiama ${PHONE_DISPLAY}`}>
              <Phone size={17} />
              {PHONE_DISPLAY}
            </a>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
               className="btn btn-whatsapp btn-sm" id="header-whatsapp-btn">
              <MessageCircle size={17} />
              Emergenza
            </a>
          </div>

          {/* Hamburger mobile */}
          <button className="header__hamburger" onClick={() => setMenuOpen(o => !o)}
                  aria-label="Apri menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__top">
          <img src="/logo.png" alt="Ortopedia Salute S.r.l." className="mobile-menu__logo-img" />
          <button onClick={closeMenu} aria-label="Chiudi menu"><X size={26} /></button>
        </div>
        <nav className="mobile-menu__nav">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="mobile-menu__link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <a href={PHONE_HREF} className="btn btn-secondary btn-lg" style={{background:'var(--navy)', color:'white'}}>
            <Phone size={20} /> {PHONE_DISPLAY}
          </a>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
             className="btn btn-whatsapp btn-lg" onClick={closeMenu}>
            <MessageCircle size={20} /> WhatsApp Emergenza
          </a>
        </div>
      </div>
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </>
  );
}
