import { Link } from 'react-router-dom';
import { ChevronRight, Camera, Award, Heart, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const timeline = [
  { year: '2016', title: 'The Beginning', description: 'Started Sripictures with a passion for storytelling through the lens.' },
  { year: '2018', title: 'First Major Wedding', description: 'Covered our first destination wedding, marking a significant milestone.' },
  { year: '2020', title: '500+ Events', description: 'Reached the milestone of covering over 500 events and celebrations.' },
  { year: '2023', title: 'Premium Studio', description: 'Launched our state-of-the-art photography studio in Chennai.' },
  { year: '2024', title: 'Expanding Horizons', description: 'Extending our services across South India with a growing team.' },
];

const values = [
  {
    icon: Camera,
    title: 'Quality First',
    description: 'We never compromise on quality. Every image is crafted with precision and care.',
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'Photography is not just our profession—it\'s our calling and our art form.',
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Your vision is our priority. We listen, understand, and deliver beyond expectations.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for excellence in every frame, every project, every interaction.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-body text-accent uppercase tracking-[0.3em] text-sm">About Sripictures</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight">
                Crafting Stories <br />
                <span className="text-accent">Through the Lens</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Founded by Srinath S, Sripictures has been capturing life's most precious moments since 2016. What started as a passion project has grown into a trusted name in professional photography across Chennai and South India.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80"
                  alt="Srinath S - Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg">
                <p className="font-heading text-3xl font-bold">8+</p>
                <p className="font-body text-sm uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              The <span className="text-accent">Story</span> Behind the Lens
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              My journey with photography began with a simple belief: every moment has a story worth preserving. Over the years, I've had the privilege of being part of countless celebrations, capturing emotions that words cannot express.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mt-4">
              At Sripictures, we don't just take photographs—we create visual narratives that you'll cherish for generations. Whether it's the tender glance between a couple on their wedding day or the unbridled joy at a family celebration, we're there to preserve these fleeting moments forever.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-accent">Journey</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="inline-block bg-secondary p-6 rounded-lg">
                    <span className="font-heading text-2xl font-bold text-accent">{item.year}</span>
                    <h3 className="font-heading text-xl font-semibold mt-2">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-accent">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card border border-border rounded-lg hover:border-accent/30 transition-all duration-500 hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Professional <span className="text-accent">Equipment</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                We invest in the best equipment to deliver outstanding quality. Our gear includes top-of-the-line cameras, professional lenses, and state-of-the-art lighting equipment to ensure every shot is picture-perfect.
              </p>
              <ul className="space-y-3">
                {[
                  'Full-frame mirrorless cameras',
                  'Professional-grade lenses',
                  'Studio lighting equipment',
                  'Advanced editing software',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
                alt="Professional camera equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Let's Create Together
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to capture your special moments? I'd love to hear about your vision.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider"
          >
            <a
              href="https://wa.me/918939320711?text=Hi%20Srinath%2C%20I%27d%20like%20to%20discuss%20a%20photography%20project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
