import { Link } from 'react-router-dom';
import { ChevronRight, Camera, Heart, Users, Briefcase, Gift, ArrowRight, BabyIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import r4 from "@/assets/reception/_23A9908.jpg";
import w4 from "@/assets/wedding/_23A2408.jpg";
import e4 from "@/assets/events/RED00673.jpg";
import e5 from "@/assets/events/DSC_2757.jpg";
import e6 from "@/assets/events/vp.jpg";

const services = [
  {
  icon: Heart,
  title: 'Wedding Photography',
  description:'Your wedding day deserves to be captured with perfection. We document every precious moment, from the nervous preparations to the joyful celebrations.',
  features: ['Full Day Coverage','Candid & Traditional Shots','Photo Album','4K Video Option'],
  image: w4,
  },
  {
    icon: Gift,
    title: 'Pre-Wedding Shoots',
    description: 'Create romantic memories before the big day. Our pre-wedding shoots are designed to tell your love story in stunning locations.',
    features: ['Location Scouting', 'Outfit Changes', 'Creative Concepts', 'Same Day Preview'],
    image: e6,
  },
  {
    icon: Camera,
    title: 'Portrait Photography',
    description: 'Professional portraits that capture your personality and essence. Perfect for individuals, families, and professional headshots.',
    features: ['Studio & Outdoor', 'Professional Editing', 'Multiple Looks', 'Quick Turnaround'],
    image: r4,
  },
  {
    icon: Users,
    title: 'Event Coverage',
    description: 'From birthdays to anniversaries, we capture the energy and emotions of your special events with professional precision.',
    features: ['Full Event Coverage', 'Candid Photography', 'Group Photos', 'Online Gallery'],
    image: e4,
  },
  {
  icon: BabyIcon,
  title: 'Baby Shower',
  description:
    'Beautifully capturing the joy, emotions, and special moments of baby shower celebrations with a warm and creative touch.',
  features: [
    'Candid Moments',
    'Family & Friends Coverage',
    'Decor & Detail Shots',
    'High-Quality Edited Photos'
  ],
  image: e5, // use your imported baby shower image
},

];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Services</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              From intimate portraits to grand celebrations, we offer comprehensive photography services tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
  src={service.image}
  alt={service.title}
  width={1200}
  height={900}
  loading={index === 0 ? "eager" : "lazy"}
  decoding="async"
  fetchPriority={index === 0 ? "high" : "low"}
  className="
    w-full h-full object-cover
    transition-transform duration-500
    will-change-transform
    hover:scale-105
  "
/>

                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-lg -z-10" />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold">
                    {service.title}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="font-body text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider"
                  >
                    <a
                      href={`https://wa.me/918939320711?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Our Quality <span className="text-accent">Promise</span>
            </h2>
            <p className="font-body text-muted-foreground mb-12">
              Every project receives our complete attention and dedication. Here's what you can always expect from Sripictures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: '4K Resolution', desc: 'Crystal clear images in the highest quality' },
                { title: 'Quick Delivery', desc: 'Your photos delivered within the promised timeline' },
                { title: 'Personalized Service', desc: 'Tailored approach to match your vision' },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-secondary/50 rounded-lg">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-accent">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us today to discuss your requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider"
            >
              <a
                href="https://wa.me/918939320711?text=Hi%2C%20I%27m%20interested%20in%20your%20photography%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body uppercase tracking-wider"
            >
              <Link to="/contact">
                View Contact Info
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
