import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-heading text-3xl font-bold tracking-wider">
                <span className="text-foreground">Sri</span>
                <span className="text-accent">pictures</span>
              </span>
            </Link>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Crafting Memories Through the Lens. Professional photography services for weddings, events, portraits, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold text-foreground">Services</h4>
            <nav className="flex flex-col gap-2">
              {['Weddings', 'Events', 'Portraits', 'Pre-Wedding', 'Business Events'].map((service) => (
                <span key={service} className="font-body text-sm text-muted-foreground">
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918939320711"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-accent" />
                <span className="font-body text-sm">+91 8939320711</span>
              </a>
              <a
                href="mailto:sripictures19@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-accent" />
                <span className="font-body text-sm">sripictures19@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/sripictures_2016"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Instagram className="w-4 h-4 group-hover:text-accent" />
                <span className="font-body text-sm">@sripictures_2016</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {currentYear} Sripictures. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Crafted with passion by Srinath S
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
