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
    <form onSubmit={handleSubmit} className="grid grid-cols-2 sm:grid-cols-1 mobile:grid-cols-1 gap-4">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-[20px] px-4 focus:outline-none"
        required
      />

    <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border p-2 rounded-[20px] px-4 focus:outline-none"
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded-[20px] px-4 focus:outline-none"
        required
      />

    <input
        type="text"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded-[20px] px-4 focus:outline-none"
        required
      />

      <input
        type="text"
        placeholder="Empresa"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        className="border p-2 rounded-[20px] px-4 focus:outline-none"
        required
      />

    <input
        type="text"
        placeholder="Puesto"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="border p-2 rounded-[20px] px-4 focus:outline-none"
        required
      />
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded-[20px] col-start-1 col-end-3 sm:col-end-2 mobile:col-end-2  px-4 focus:outline-none min-h-[150px]"
        required
      />
      <button type="submit" className="bg-orange rounded-[20px] hover:bg-orange-dark text-white py-2 px-4 rounded justify-self-start py-[10px] px-[24px] rounded-full">
        Enviar Formulario
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
