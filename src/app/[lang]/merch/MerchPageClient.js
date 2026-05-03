// src/app/[lang]/merch/MerchPageClient.js
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaShoppingCart, FaCheckCircle, FaEnvelope } from 'react-icons/fa';

// ── Datos de contacto reales ────────────────────────────────────────────────
const WHATSAPP_NUMBER = '15128033936'; // +1 512-803-3936
const CONTACT_EMAIL   = 'ian.developer.tec@gmail.com'; // 🔧 TEST — cambiar a Capitalcity.volleyballatx@gmail.com para producción

/**
 * Genera un link de WhatsApp con todos los detalles del pedido pre-escritos.
 */
function buildWhatsAppLink({ name, phone, email, product, color, size, qty, notes }) {
  const msg = [
    '🏐 *Capital City Volleyball — Merch Order*',
    '',
    `👤 Name: ${name}`,
    `📱 Phone: ${phone}`,
    email ? `📧 Email: ${email}` : null,
    `🛒 Item: ${product}`,
    `🎨 Color: ${color}`,
    size ? `📐 Size: ${size}` : null,
    `🔢 Qty: ${qty}`,
    notes ? `📝 Notes: ${notes}` : null,
  ].filter(Boolean).join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/**
 * Genera un link mailto: con todos los detalles del pedido como cuerpo del correo.
 * Al hacer clic se abre el cliente de correo del usuario (Gmail app, Outlook, etc.)
 */
function buildMailtoLink({ name, phone, email, product, color, size, qty, notes }) {
  const subject = `Merch Order — ${product} (${color}) — ${name}`;
  const body = [
    'Capital City Volleyball — Merch Order',
    '─────────────────────────',
    `Name:     ${name}`,
    `Phone:    ${phone}`,
    email ? `Email:    ${email}` : null,
    `Item:     ${product}`,
    `Color:    ${color}`,
    size ? `Size:     ${size}` : null,
    `Quantity: ${qty}`,
    notes ? `Notes:    ${notes}` : null,
    '',
    'Please confirm this order at your earliest convenience.',
  ].filter(Boolean).join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function MerchPageClient({ lang, dict }) {
  const t = dict.merchPage;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  // ── Valida el form y extrae los datos ──────────────────────────────────────
  function getFormData() {
    const fd = new FormData(formRef.current);
    const name    = fd.get('name')?.trim();
    const phone   = fd.get('phone')?.trim();
    const product = fd.get('product')?.trim();
    const color   = fd.get('color')?.trim();

    if (!name || !phone || !product || !color) {
      alert('Please fill in Name, Phone, Item, and Color before sending.');
      return null;
    }

    return {
      name,
      phone,
      email:   fd.get('email')?.trim()    || '',
      product,
      color,
      size:    fd.get('size')?.trim()     || '',
      qty:     fd.get('quantity')?.trim() || '1',
      notes:   fd.get('notes')?.trim()    || '',
    };
  }

  const [isSending, setIsSending] = useState(false);

  // ── Botón Email — Usa Resend (API Route) ───────────
  async function handleEmailOrder(e) {
    e.preventDefault();
    const data = getFormData();
    if (!data) return;

    setIsSending(true);

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        formRef.current.reset();
        setSelectedProduct(null);
      } else {
        alert(`Error: ${result.error}\n(Recuerda: Resend sin dominio verificado solo envía a tu propio correo registrado).`);
      }
    } catch (error) {
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  }

  // ── Botón WhatsApp — SOLO abre WhatsApp con el pedido redactado ─────────────
  function handleWhatsAppOrder(e) {
    e.preventDefault();
    const data = getFormData();
    if (!data) return;

    // Abre WhatsApp en nueva pestaña con el pedido pre-escrito
    window.open(buildWhatsAppLink(data), '_blank');

    setSubmitted(true);
    formRef.current.reset();
    setSelectedProduct(null);
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative bg-primary py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/homepage-capital.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-lg text-gray-200">{t.subtitle}</p>
        </div>
      </div>

      {/* ── Contenido ── */}
      <section className="max-w-6xl mx-auto px-4 py-16">

        {/* Imagen del flyer — portrait 2:3 (1024x1536) */}
        <div className="flex justify-center mb-12">
          <div
            className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-primary"
            style={{ aspectRatio: '2/3' }}
          >
            <Image
              src="/capitalcityp-edidos.jpeg"
              alt="Capital City Volleyball Merch"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>

        {/* Tarjetas de productos */}
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Select Your Item</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {t.products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setSelectedProduct(product.id)}
              className={`group relative rounded-2xl p-8 text-center border-2 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 focus:outline-none ${
                selectedProduct === product.id
                  ? 'border-accent bg-accent/5 shadow-accent/20 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-accent'
              }`}
            >
              {selectedProduct === product.id && (
                <div className="absolute top-3 right-3 text-accent">
                  <FaCheckCircle size={20} />
                </div>
              )}
              <div className="text-5xl mb-4">{product.emoji}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
              <p className="text-3xl font-extrabold text-accent">{product.price}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {t.colors.map((c) => (
                  <span key={c} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Formulario de pedido */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 shadow-inner border border-gray-200 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <FaShoppingCart className="mx-auto text-accent mb-3" size={32} />
            <h2 className="text-2xl font-bold text-primary">{t.orderTitle}</h2>
            <p className="text-muted mt-2">{t.orderSubtitle}</p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">✅</div>
              <p className="text-xl font-semibold text-primary">{t.form.success}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-accent underline text-sm"
              >
                Place another order
              </button>
            </div>
          ) : (
            <form ref={formRef} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">{t.form.name} *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    placeholder="e.g. Maria Lopez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">{t.form.phone} *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    placeholder="(512) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">{t.form.email}</label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">{t.form.product} *</label>
                  <select
                    name="product"
                    required
                    defaultValue={selectedProduct || ''}
                    key={selectedProduct}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-white"
                  >
                    <option value="">-- Select --</option>
                    {t.products.map((p) => (
                      <option key={p.id} value={p.name}>{p.name} — {p.price}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">{t.form.color} *</label>
                  <select
                    name="color"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-white"
                  >
                    <option value="">-- Select --</option>
                    {t.colors.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">{t.form.size}</label>
                  <select
                    name="size"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-white"
                  >
                    <option value="">N/A</option>
                    {t.sizes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">{t.form.quantity}</label>
                <input
                  name="quantity"
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">{t.form.notes}</label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition resize-none"
                  placeholder="Any special requests..."
                />
              </div>

              {/* Nota */}
              <p className="text-xs text-gray-400 text-center">
                Choose how you want to send your order — Email or WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">

                {/* 📧 Email — Llama a la API de Resend */}
                <button
                  type="button"
                  onClick={handleEmailOrder}
                  disabled={isSending}
                  className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-bold py-4 px-6 rounded-xl hover:bg-accent-light transition-colors duration-300 text-lg shadow-lg disabled:opacity-50"
                >
                  <FaEnvelope size={18} />
                  {isSending ? 'Sending...' : 'Send via Email'}
                </button>

                {/* 💬 WhatsApp — SOLO abre WhatsApp con los datos del form */}
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 text-lg shadow-lg"
                >
                  <FaWhatsapp size={22} />
                  Send via WhatsApp
                </button>

              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
