import { useMemo, useState } from 'react';
import { ShoppingBag, Plus, Check, X, MessageCircle, Tag } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/catalog.js';
import './Catalog.css';

/**
 * Catalog — Catalogo ausili con filtro per categoria e sistema preventivo.
 * @param {object} props
 * @param {object} props.cart - Hook useCart (items, toggleItem, isInCart, count, buildWhatsappUrl)
 */
export default function Catalog({ cart }) {
  const [activeCategory, setActiveCategory] = useState('tutti');
  const [cartOpen, setCartOpen] = useState(false);

  /** Filtra i prodotti per categoria selezionata */
  const filtered = useMemo(() => {
    if (activeCategory === 'tutti') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const waUrl = cart.buildWhatsappUrl();

  return (
    <section className="section" id="catalogo" aria-labelledby="catalogo-title">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">I nostri ausili</span>
          <h2 className="section-title" id="catalogo-title">
            Scegli gli ausili e<br />ricevi un preventivo gratis
          </h2>
          <p className="section-subtitle">
            Aggiungi al preventivo gli ausili di cui hai bisogno. 
            Ti contatteremo via WhatsApp con disponibilità, prezzi e info sulle convenzioni ASL.
          </p>
        </header>

        {/* Category filters */}
        <div className="catalog__filters" role="group" aria-label="Filtra per categoria">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn${activeCategory === cat.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="catalog__grid" aria-live="polite">
          {filtered.map(product => {
            const inCart = cart.isInCart(product.id);
            return (
              <article key={product.id} className={`product-card${inCart ? ' product-card--selected' : ''}`}
                       id={`prodotto-${product.id}`}>
                <div className="product-card__icon-wrap">
                  <span className="product-card__emoji" aria-hidden="true">{product.icon}</span>
                </div>
                <div className="product-card__body">
                  {product.badge && (
                    <span className="badge badge-teal product-card__badge">
                      <Tag size={11} /> {product.badge}
                    </span>
                  )}
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__desc">{product.desc}</p>
                  {product.noleggio && (
                    <p className="product-card__noleggio">🔄 Disponibile in noleggio</p>
                  )}
                </div>
                <button
                  className={`product-card__btn${inCart ? ' product-card__btn--added' : ''}`}
                  onClick={() => cart.toggleItem(product)}
                  aria-label={inCart ? `Rimuovi ${product.name} dal preventivo` : `Aggiungi ${product.name} al preventivo`}
                >
                  {inCart ? <><Check size={16} /> Aggiunto</> : <><Plus size={16} /> Aggiungi al preventivo</>}
                </button>
              </article>
            );
          })}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <p className="catalog__empty">Nessun ausilio trovato in questa categoria.</p>
        )}
      </div>

      {/* Floating cart bar */}
      {cart.count > 0 && (
        <div className="cart-bar" role="region" aria-label="Preventivo corrente">
          <button className="cart-bar__toggle" onClick={() => setCartOpen(o => !o)}
                  aria-expanded={cartOpen}>
            <ShoppingBag size={20} />
            <span>Il tuo preventivo</span>
            <span className="cart-bar__count">{cart.count}</span>
          </button>

          {/* Cart detail panel */}
          {cartOpen && (
            <div className="cart-panel" role="dialog" aria-label="Lista ausili nel preventivo">
              <div className="cart-panel__header">
                <h4>Preventivo selezionato</h4>
                <button onClick={() => setCartOpen(false)} aria-label="Chiudi preventivo">
                  <X size={20} />
                </button>
              </div>
              <ul className="cart-panel__list">
                {cart.items.map(item => (
                  <li key={item.id} className="cart-panel__item">
                    <span>{item.icon} {item.name}</span>
                    <button onClick={() => cart.removeItem(item.id)} aria-label={`Rimuovi ${item.name}`}>
                      <X size={15} />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-panel__footer">
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                   className="btn btn-whatsapp" id="cart-send-whatsapp-btn"
                   style={{ width: '100%', justifyContent: 'center' }}>
                  <MessageCircle size={18} />
                  Invia preventivo su WhatsApp
                </a>
                <button className="cart-panel__clear" onClick={cart.clearCart}>
                  Svuota preventivo
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
