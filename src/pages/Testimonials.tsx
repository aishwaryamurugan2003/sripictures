import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Priya & Arjun Kumar',
    event: 'Wedding Photography',
    rating: 5,
    text: 'Srinath captured our wedding day beautifully! Every emotion, every smile, every tear of joy - he was there to preserve it all. The photos are absolutely stunning and we couldn\'t be happier with the results.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    date: 'December 2023',
  },
  {
    name: 'Rahul Menon',
    event: 'Corporate Event',
    rating: 5,
    text: 'Professional, punctual, and incredibly talented. Sripictures covered our annual conference flawlessly. The photos were delivered quickly and the quality exceeded our expectations. Highly recommended for corporate events!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    date: 'November 2023',
  },
  {
    name: 'Sneha & Vikram',
    event: 'Pre-Wedding Shoot',
    rating: 5,
    text: 'Our pre-wedding shoot was magical! Srinath made us feel so comfortable and the locations he suggested were perfect. The photos tell our love story beautifully. Can\'t wait for him to capture our wedding!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    date: 'October 2023',
  },
  {
    name: 'Karthik Subramanian',
    event: 'Portrait Session',
    rating: 5,
    text: 'I needed professional headshots for my business profile and LinkedIn. Srinath understood exactly what I needed and delivered stunning portraits. The whole experience was smooth and enjoyable.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    date: 'September 2023',
  },
  {
    name: 'Lakshmi & Family',
    event: 'Family Portrait',
    rating: 5,
    text: 'Getting three generations together for a family portrait was challenging, but Srinath handled it with such patience and creativity. The photos are now proudly displayed in our home. Thank you for these precious memories!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    date: 'August 2023',
  },
  {
    name: 'Deepa & Ramesh',
    event: 'Wedding Photography',
    rating: 5,
    text: 'From the mehendi to the reception, Sripictures was there capturing every moment. The candid shots are my favorite - they truly capture the essence of our celebrations. Worth every penny!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    date: 'July 2023',
  },
  {
    name: 'Arun Prakash',
    event: 'Business Event',
    rating: 5,
    text: 'We hired Sripictures for our product launch event. The photos were professional, creative, and perfect for our marketing needs. Srinath has a great eye for detail and captures the energy of events perfectly.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    date: 'June 2023',
  },
  {
    name: 'Meera Nair',
    event: 'Birthday Celebration',
    rating: 5,
    text: 'Hired Sripictures for my daughter\'s first birthday. The photos are adorable and perfectly capture all the joy and excitement of the day. The team was wonderful with kids. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80',
    date: 'May 2023',
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Testimonials</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Client <span className="text-accent">Stories</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about their experience with Sripictures.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '20+', label: 'Happy Clients' },
              { number: '5.0', label: 'Average Rating' },
              { number: '100%', label: 'Satisfaction' },
              { number: '25+', label: 'Events Covered' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent">{stat.number}</div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-accent/30 transition-all duration-500"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent/20 mb-4" />

                {/* Content */}
                <p className="font-body text-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading text-lg font-semibold">{testimonial.name}</h4>
                    <p className="font-body text-xs text-accent uppercase tracking-wider">{testimonial.event}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Let us create beautiful memories for you. Get in touch today and let's discuss your photography needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body uppercase tracking-wider"
          >
            <a
              href="https://wa.me/918939320711?text=Hi%2C%20I%27ve%20seen%20your%20testimonials%20and%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Session
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
