import { Link } from 'react-router-dom';
import { ArrowRight, Play, Camera, Zap, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import w4 from "@/assets/wedding/_23A2408.jpg";
import w9 from "@/assets/wedding/RED01233.jpg";
import r11 from "@/assets/reception/RED00626.jpg";
import r2 from "@/assets/reception/_23A0119.jpg";
import r10 from "@/assets/reception/_23A9719.jpg";
import e3 from "@/assets/events/LIN_4881.jpg";
import e4 from "@/assets/events/LIN_4901.jpg";
const stats = [
  { number: '8+', label: 'Years Experience' },
  { number: '25+', label: 'Events Captured' },
  { number: '25+', label: 'Happy Clients' },
  { number: '25+', label: 'Photos Delivered' },
];

const highlights = [
  { icon: Camera, title: '4K Resolution', description: 'Crystal clear images in the highest quality' },
  { icon: Zap, title: 'Quick Delivery', description: 'Get your photos within the promised timeline' },
  { icon: Heart, title: 'Personalized Service', description: 'Tailored to your unique vision and style' },
  { icon: Clock, title: 'Timely Coverage', description: 'Never miss a precious moment' },
];

const featuredImages = [
  { src: w4, alt: "Wedding ritual moment", category: "weddings" },
  { src: w9, alt: "Bride ceremony moment", category: "weddings" },
  { src: r11, alt: "Couple portrait", category: "weddings" },
  { src: r2, alt: "Wedding candid", category: "weddings" },
  { src: r10, alt: "Emotional wedding moment", category: "weddings" },
  { src: e3, alt: "Bride portrait", category: "weddings" },
  { src: e4, alt: "Wedding details", category: "weddings" },
];

const testimonials = [
  {
    name: 'Priya & Arjun',
    event: 'Wedding',
    text: 'Srinath captured our wedding beautifully. Every photo tells a story!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Rahul M.',
    event: 'Corporate Event',
    text: 'Professional, punctual, and the quality exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Sneha K.',
    event: 'Portrait Session',
    text: 'Amazing experience! The portraits are stunning and very natural.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="font-body text-accent uppercase tracking-[0.3em] text-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Welcome to Sripictures
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Crafting Memories
              <br />
              <span className="text-gradient-gold">Through the Lens</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Professional photography services that capture your most precious moments with artistry and emotion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider px-8"
              >
                <a
                  href="https://wa.me/918939320711?text=Hi%2C%20I%27m%20interested%20in%20your%20photography%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-foreground/20 hover:bg-foreground/5 font-body uppercase tracking-wider"
              >
                <Link to="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-4">Why Choose Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Excellence in Every <span className="text-accent">Frame</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-500 hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-4">Portfolio</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Our <span className="text-accent">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredImages.map((image, index) => (
              <Link
                key={index}
                to="/portfolio"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="font-body text-sm text-foreground">{image.alt}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body uppercase tracking-wider"
            >
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-body text-accent uppercase tracking-[0.3em] text-sm mb-4">Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              What Our Clients <span className="text-accent">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-accent/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading text-lg font-semibold">{testimonial.name}</h4>
                    <p className="font-body text-xs text-accent uppercase tracking-wider">{testimonial.event}</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="ghost"
              className="text-accent hover:text-accent hover:bg-accent/10 font-body uppercase tracking-wider"
            >
              <Link to="/testimonials">
                Read More Reviews
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Capture Your <span className="text-accent">Story</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create timeless memories together. Get in touch today and let's discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider px-8"
            >
              <a
                href="https://wa.me/918939320711?text=Hi%2C%20I%27m%20interested%20in%20your%20photography%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 hover:bg-foreground/5 font-body uppercase tracking-wider"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
