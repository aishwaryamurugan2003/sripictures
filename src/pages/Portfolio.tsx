import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import Lightbox from "@/components/Lightbox";
import { cn } from "@/lib/utils";

/* ======================
   IMAGE IMPORTS
====================== */

// Wedding images
import w1 from "@/assets/wedding/_23A1607.jpg";
import w2 from "@/assets/wedding/_23A1762.jpg";
import w3 from "@/assets/wedding/_23A2399.jpg";
import w4 from "@/assets/wedding/_23A2408.jpg";
import w5 from "@/assets/wedding/_23A2481.jpg";
import w6 from "@/assets/wedding/_23A2486.jpg";
import w7 from "@/assets/wedding/RED00672.jpg";
import w8 from "@/assets/wedding/RED00979.jpg";
import w9 from "@/assets/wedding/RED01233.jpg";
import w10 from "@/assets/wedding/RED01242.jpg";

// Reception images
import r1 from "@/assets/reception/_23A0055.jpg";
import r2 from "@/assets/reception/_23A0119.jpg";
import r3 from "@/assets/reception/_23A0157.jpg";
import r4 from "@/assets/reception/_23A1428.jpg";
import r5 from "@/assets/reception/_23A6789.jpg";
import r6 from "@/assets/reception/_23A6842.jpg";
import r7 from "@/assets/reception/_23A6921.jpg";
import r8 from "@/assets/reception/_23A6970.jpg";
import r9 from "@/assets/reception/_23A9626.jpg";
import r10 from "@/assets/reception/_23A9719.jpg";
import r11 from "@/assets/reception/RED00626.jpg";
import r12 from "@/assets/reception/RED00537.jpg";
import r13 from "@/assets/reception/RED00606.jpg";

// Birthday images (merged into Events)
import b1 from "@/assets/events/album_0010.jpg";
import b2 from "@/assets/events/album_0016.jpg";
import b3 from "@/assets/events/album_0023.jpg";

// Event images
import e1 from "@/assets/events/IMG_7916.jpg";
import e2 from "@/assets/events/LIN_4771.jpg";
import e3 from "@/assets/events/LIN_4881.jpg";
import e4 from "@/assets/events/LIN_4901.jpg";

/* ======================
   CATEGORIES
====================== */

const categories = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Weddings" },
  { id: "reception", name: "Reception" },
  { id: "events", name: "Events" },
  { id: "portraits", name: "Portraits" },
  { id: "pre-wedding", name: "Pre-Wedding" },
  { id: "business", name: "Business" },
];

/* ======================
   PORTFOLIO DATA
====================== */

const portfolioImages = [
  { src: w1, alt: "Wedding ritual moment", category: "weddings" },
  { src: w2, alt: "Bride ceremony moment", category: "weddings" },
  { src: w3, alt: "Couple portrait", category: "weddings" },
  { src: w4, alt: "Wedding candid", category: "weddings" },
  { src: w5, alt: "Emotional wedding moment", category: "weddings" },
  { src: w6, alt: "Bride portrait", category: "weddings" },
  { src: w7, alt: "Wedding details", category: "weddings" },
  { src: w8, alt: "Couple candid", category: "weddings" },
  { src: w9, alt: "Wedding rituals close-up", category: "weddings" },
  { src: w10, alt: "Couple entry moment", category: "weddings" },

  { src: r1, alt: "Reception dance moment", category: "reception" },
  { src: r2, alt: "Couple stage portrait", category: "reception" },
  { src: r3, alt: "Groom portrait", category: "reception" },
  { src: r4, alt: "Reception stage moment", category: "reception" },
  { src: r5, alt: "Royal groom pose", category: "reception" },
  { src: r6, alt: "Bride artistic portrait", category: "reception" },
  { src: r7, alt: "Bride elegance close-up", category: "reception" },
  { src: r8, alt: "Traditional groom portrait", category: "reception" },
  { src: r9, alt: "Sherwani detail shot", category: "reception" },
  { src: r10, alt: "Bride reflection moment", category: "reception" },
  { src: r11, alt: "Traditional groom portrait", category: "reception" },
  { src: r12, alt: "Traditional groom portrait", category: "reception" },
  { src: r13, alt: "Traditional groom portrait", category: "reception" },

  { src: e1, alt: "Event candid moment", category: "events" },
  { src: e2, alt: "Stage performance", category: "events" },
  { src: e3, alt: "Outdoor event shot", category: "events" },
  { src: e4, alt: "Cultural event moment", category: "events" },

  { src: b1, alt: "Birthday family portrait", category: "events" },
  { src: b2, alt: "Baby birthday close-up", category: "events" },
  { src: b3, alt: "Birthday celebration moment", category: "events" },
];

/* ======================
   COMPONENT
====================== */

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? portfolioImages
      : portfolioImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Portfolio</span>
          </nav>

          <div className="text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Portfolio</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of captured moments across weddings,
              events, portraits, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-[60px] bg-background/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() =>
                  setSearchParams(
                    category.id === "all" ? {} : { category: category.id }
                  )
                }
                className={cn(
                  "px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all",
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative bg-muted overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority={index < 4 ? "high" : "low"}
                    className="w-full rounded-xl transition-all duration-700 group-hover:scale-105 blur-sm group-hover:blur-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="block text-sm text-white">
                      {image.alt}
                    </span>
                    <span className="block text-xs text-accent uppercase tracking-wider mt-1">
                      {categories.find(c => c.id === image.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </Layout>
  );
};

export default Portfolio;
