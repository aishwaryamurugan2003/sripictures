import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are a friendly assistant for Sripictures, a professional photography studio run by Srinath S in Chennai, India.

About Sripictures:
- Tagline: "Crafting Memories Through the Lens"
- Services: Weddings, Events, Portraits, Pre-Wedding shoots, Business Events
- Highlights: 4K Resolution, Quick Delivery, Personalized Service
- Contact: Phone/WhatsApp: +91 8939320711, Email: sripictures19@gmail.com, Instagram: @sripictures_2016
- Location: Chennai, Tamil Nadu, India
- Experience: 8+ years, 500+ events covered, 1000+ happy clients

Your behavior:
- Be warm, friendly, and conversational - like a helpful receptionist
- Answer questions about services, booking, pricing (direct to WhatsApp for specific quotes), availability
- Guide users to the portfolio, services, or contact pages when relevant
- Encourage booking via WhatsApp as it's the easiest method
- Keep responses concise and helpful (2-3 sentences max)
- Never mention you are an AI - respond as if you're a team member
- If you don't know something specific, offer to connect them with Srinath directly via WhatsApp

Important: Only answer based on the information provided above. For specific pricing or availability, always direct to WhatsApp.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-10), // Keep last 10 messages for context
        ],
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "We're experiencing high traffic. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("Failed to get response");
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "I'd be happy to help! Please reach out to us on WhatsApp for the quickest response.";

    return new Response(JSON.stringify({ response: assistantMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ 
      response: "I'm having a little trouble right now. For immediate assistance, please reach out via WhatsApp at +91 8939320711!" 
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
