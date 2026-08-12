import Image from "next/image";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { business } from "@/data/business";
import { houstonImage } from "@/data/gallery";

export default function HoustonSection() {
  return (
    <section id="houston" className="section-pad">
      <div className="wrap grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <p className="label accent">07 — Local</p>
            <h2 className="houston-title">Deep in Houston.</h2>
            <p className="houston-addr">
              <strong>{business.name}</strong>
              {business.street}
              <br />
              {business.city}, {business.state} {business.zip}
              <br />
              {business.country}
            </p>
            <ArrowLink href={business.mapsSearchUrl} external>
              Get Directions
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="houston-media">
            <Image
              src={houstonImage.src}
              alt={houstonImage.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
