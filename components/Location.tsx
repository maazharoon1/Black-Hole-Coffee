import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { business } from "@/data/business";

export default function Location() {
  return (
    <section id="location" className="section-pad">
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="loc-card">
            <p className="label accent">08 — Visit</p>
            <h3 style={{ marginTop: 14 }}>Find us.</h3>

            <div className="loc-line">
              <b>Address</b>
              <span>{business.fullAddress}</span>
            </div>
            <div className="loc-line">
              <b>Phone</b>
              <span>
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
              </span>
            </div>
            <div className="loc-line">
              <b>Rating</b>
              <span>
                {business.rating} ★ · {business.reviewCount.toLocaleString()}+ Reviews
              </span>
            </div>

            <div className="loc-actions">
              <ArrowLink href={business.mapsSearchUrl} external>
                Get Directions
              </ArrowLink>
              <ArrowLink href={business.phoneHref} variant="ghost" showArrow={false}>
                Call Us
              </ArrowLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="map-frame">
            <iframe
              src={business.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${business.name}`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
