import Image from "next/image";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { business } from "@/data/business";
import { finalCtaImage } from "@/data/gallery";

export default function FinalCTA() {
  return (
    <section id="final-cta">
      <div className="fc-media">
        <Image
          src={finalCtaImage.src}
          alt={finalCtaImage.alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="fc-scrim" />
      <div className="fc-inner">
        <Reveal>
          <p className="label accent">{business.name}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="fc-title">
            Follow the <em>gravity.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="fc-sub">Come find your next coffee at {business.name}.</p>
        </Reveal>
        <Reveal delay={3}>
          <div className="fc-actions">
            <ArrowLink href={business.mapsSearchUrl} external>
              Get Directions
            </ArrowLink>
            <ArrowLink href={business.phoneHref} variant="ghost" showArrow={false}>
              Call Us
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
