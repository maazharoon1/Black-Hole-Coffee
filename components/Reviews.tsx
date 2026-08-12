import Reveal from "@/components/Reveal";
import { business } from "@/data/business";

const PLACEHOLDER_COUNT = 3;

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad">
      <div className="wrap">
        <Reveal>
          <div className="rev-top">
            <p className="label accent">06 — Trusted in Houston</p>
            <div className="rev-score serif">{business.rating}</div>
            <div className="rev-stars">★★★★☆</div>
            <p className="label rev-count">
              {business.reviewCount.toLocaleString()}+ Google Reviews
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="placeholder-note">
            The cards below are placeholders showing where real customer reviews can
            go — swap in verified quotes when they&rsquo;re ready.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <Reveal key={i} delay={i as 0 | 1 | 2}>
              <div className="test-card h-full">
                <span className="ph-tag">Placeholder</span>
                <p>
                  &ldquo;Review text goes here once verified guest feedback is
                  provided.&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
