'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name,
        lastName,
        email,
        phone,
        businessName,
        position,
        message,
    }),
    });

    if (res.ok) {
      setStatus('Mensaje enviado correctamente');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Error al enviar el mensaje');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />

    <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />

    <input
        type="text"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded"
        required
      />

<input
        type="text"
        placeholder="Empresa"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        className="border p-2 rounded"
        required
      />

    <input
        type="text"
        placeholder="Puesto"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Enviar
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
