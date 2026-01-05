import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, Instagram, MapPin, MessageCircle, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Contact</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Ready to capture your special moments? We'd love to hear from you. Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Primary CTA */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Let's Start a <span className="text-accent">Conversation</span>
                </h2>
                <p className="font-body text-muted-foreground">
                  The easiest way to reach us is through WhatsApp. We typically respond within an hour during business hours.
                </p>
              </div>

              {/* WhatsApp - Primary */}
              <a
                href="https://wa.me/918939320711?text=Hi%2C%20I%27m%20interested%20in%20your%20photography%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-green-500/10 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-white" fill="white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground">WhatsApp</h3>
                    <p className="font-body text-muted-foreground">Quick response • Easy booking</p>
                  </div>
                </div>
                <p className="font-body text-lg text-foreground mt-4">+91 8939320711</p>
                <Button className="mt-4 bg-green-500 text-white hover:bg-green-600 font-body uppercase tracking-wider">
                  Chat Now
                </Button>
              </a>

              {/* Business Hours */}
              <div className="p-6 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-heading text-lg font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-2 font-body text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="text-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Other Contact Methods */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold mb-6">Other Ways to Reach Us</h3>

              {/* Phone */}
              <a
                href="tel:+918939320711"
                className="group flex items-center gap-6 p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold">Phone</h4>
                  <p className="font-body text-muted-foreground">+91 8939320711</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sripictures19@gmail.com"
                className="group flex items-center gap-6 p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold">Email</h4>
                  <p className="font-body text-muted-foreground">sripictures19@gmail.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/sripictures_2016"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Instagram className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold">Instagram</h4>
                  <p className="font-body text-muted-foreground">@sripictures_2016</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-6 p-6 bg-card border border-border rounded-lg">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold">Location</h4>
                  <p className="font-body text-muted-foreground">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How do I book a session?',
                a: 'The easiest way is to reach out via WhatsApp. We\'ll discuss your requirements and check availability.',
              },
              {
                q: 'How long does it take to receive the photos?',
                a: 'Typically, you\'ll receive your edited photos within 2-4 weeks, depending on the size of the project.',
              },
              {
                q: 'Do you travel for destination shoots?',
                a: 'Yes! We cover destination weddings and shoots across India. Travel charges may apply.',
              },
              {
                q: 'What is your pricing?',
                a: 'Our packages vary based on the type of service and coverage needed. Contact us for a customized quote.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-secondary/50 rounded-lg">
                <h3 className="font-heading text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="font-body text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
