import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

const WhatsAppButton = () => {
  const phoneNumber = "9289229545"; 
  const message = "Hello! I would like to inquire."; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
