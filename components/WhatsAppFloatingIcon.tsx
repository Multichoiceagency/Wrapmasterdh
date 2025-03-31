'use client'

import { FaWhatsapp } from "react-icons/fa";

// Add this CSS class for the pulsing effect
const pulseAnimation = `
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

interface WhatsAppFloatingIconProps {
  phoneNumber: string
}

const WhatsAppFloatingIcon: React.FC<WhatsAppFloatingIconProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <>
      <style jsx>{pulseAnimation}</style>
      <div 
        className="fixed bottom-4 right-4 z-50 cursor-pointer bg-[#25D366] rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
        onClick={handleClick}
      >
        <FaWhatsapp className="w-8 h-8 text-white animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
    </>
  )
}

export default WhatsAppFloatingIcon

