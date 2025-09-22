'use client'
import { useState } from "react";
import { HomeForm } from "../types/home";
type FormData = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  city: string;
  message: string;
};
const ContactForm = ({ form }:{form: HomeForm }) => {
  const t = form;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    city: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setStatus("Mensaje enviado correctamente");
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        businessName: "",
        city: "",
        message: ""
      });
    } else {
      setStatus("Error al enviar el mensaje");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 sm:grid-cols-1 mobile:grid-cols-1 gap-4"
    >
      {t.fields.map((field) =>
        field.type === "textarea" ? (
          <textarea
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            required={field.required}
            className="border p-2 rounded-[20px] col-start-1 col-end-3 sm:col-end-2 mobile:col-end-2 px-4 focus:outline-none min-h-[150px]"
          />
        ) : (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            required={field.required}
            className="border p-2 rounded-[20px] px-4 focus:outline-none"
          />
        )
      )}

      <button
        type="submit"
        className="bg-orange hover:bg-orange-dark text-white font-light py-[10px] px-[24px] rounded-full"
      >
        {t.submit}
      </button>

      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
