import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/918939320711?text=Hi%2C%20I%27m%20interested%20in%20your%20photography%20services";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-card border border-border rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
            <span className="font-body text-sm text-foreground">Chat with us!</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
