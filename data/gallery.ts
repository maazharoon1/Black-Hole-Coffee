export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  /** Tailwind classes controlling this tile's position/size in the grid */
  className: string;
  sizes: string;
}

// Temporary editorial photography — swap `src` for real Black Hole Coffee
// House photography whenever it's available. Layout classes are tuned per
// tile, so keep new entries within the same five-slot grid shape or adjust
// the grid in components/Atmosphere.tsx.
export const galleryImages: GalleryImage[] = [
  {
    id: "atmos-1",
    src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1600&auto=format&fit=crop",
    alt: "Interior seating area at Black Hole Coffee House",
    caption: "The main room",
    className: "sm:col-span-2 lg:col-span-4 lg:row-span-2 aspect-[4/3] lg:aspect-[16/11]",
    sizes: "(min-width: 1024px) 55vw, 100vw",
  },
  {
    id: "atmos-2",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
    alt: "Espresso in dramatic dark lighting",
    caption: "Espresso",
    className: "aspect-[4/3] lg:aspect-square lg:col-span-2",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
  {
    id: "atmos-3",
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop",
    alt: "Dark roasted coffee beans",
    caption: "The beans",
    className: "aspect-[4/3] lg:aspect-square lg:col-span-2",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
  {
    id: "atmos-4",
    src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=1000&auto=format&fit=crop",
    alt: "Close detail of coffee cup and saucer",
    caption: "Details",
    className: "aspect-[4/3] lg:aspect-[3/4] lg:col-span-2",
    sizes: "(min-width: 1024px) 33vw, 50vw",
  },
  {
    id: "atmos-5",
    src: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1800&auto=format&fit=crop",
    alt: "Wide view of the cafe at night",
    caption: "Late nights",
    className: "sm:col-span-2 lg:col-span-4 aspect-[4/3] lg:aspect-[16/7]",
    sizes: "(min-width: 1024px) 66vw, 100vw",
  },
];

export const heroImage = {
  src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1800&auto=format&fit=crop",
  alt: "Dark, warmly lit interior of Black Hole Coffee House in Houston",
};

export const aboutImage = {
  src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1400&auto=format&fit=crop",
  alt: "Barista pouring espresso at Black Hole Coffee House",
};

export const houstonImage = {
  src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
  alt: "Coffee shop atmosphere representing Houston coffee culture",
};

export const finalCtaImage = {
  src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1800&auto=format&fit=crop",
  alt: "Dark cinematic coffee scene",
};
