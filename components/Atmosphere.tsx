import Image from "next/image";
import Reveal from "@/components/Reveal";
import { galleryImages } from "@/data/gallery";

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="section-pad">
      <div className="wrap">
        <Reveal>
          <p className="label accent">04 — The Room</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="menu-title" style={{ marginTop: 14 }}>
            Stay awhile.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {galleryImages.map((image, i) => (
            <Reveal key={image.id} delay={(i % 3) as 0 | 1 | 2} className={image.className}>
              <div className="atmos-item h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={image.sizes}
                  style={{ objectFit: "cover" }}
                />
                <span className="atmos-caption">{image.caption}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
