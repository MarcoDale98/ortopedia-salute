/**
 * useCart.js — Hook per gestire il preventivo/carrello
 * Espone: items, addItem, removeItem, clearCart, whatsappUrl
 */
import { useState, useCallback, useMemo } from 'react';

const WA_NUMBER = '393351807280'; // +39 335 180 7280 senza simboli

export function useCart() {
  const [items, setItems] = useState([]);

  /** Aggiunge o rimuove un prodotto dalla lista */
  const toggleItem = useCallback((product) => {
    setItems(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.filter(p => p.id !== product.id);
      return [...prev, product];
    });
  }, []);

  /** Rimuove esplicitamente un prodotto */
  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(p => p.id !== id));
  }, []);

  /** Svuota il carrello */
  const clearCart = useCallback(() => setItems([]), []);

  /** Controlla se un prodotto è già nel preventivo */
  const isInCart = useCallback((id) => items.some(p => p.id === id), [items]);

  /**
   * Compone l'URL WhatsApp con il messaggio pre-compilato.
   * Include la lista dei prodotti selezionati e i dati del form.
   */
  const buildWhatsappUrl = useCallback((formData = {}) => {
    const lista = items.map((p, i) => `${i + 1}. ${p.name}`).join('\n');
    const msg = [
      `*Richiesta Preventivo – Ortopedia Salute*`,
      ``,
      `👤 *Nome:* ${formData.nome || ''}`,
      `📞 *Telefono:* ${formData.telefono || ''}`,
      `📍 *Comune:* ${formData.comune || ''}`,
      ``,
      `*Ausili richiesti:*`,
      lista,
      formData.messaggio ? `\n💬 *Note:* ${formData.messaggio}` : '',
    ].filter(Boolean).join('\n');

    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [items]);

  return { items, toggleItem, removeItem, clearCart, isInCart, buildWhatsappUrl, count: items.length };
}
