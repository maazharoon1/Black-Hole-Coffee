import Reveal from "@/components/Reveal";
import { business } from "@/data/business";

export default function BrandStatement() {
  return (
    <section id="statement" className="section-pad">
      <div className="wrap">
        <Reveal>
          <p className="label">01 — Statement</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="statement-text" style={{ marginTop: 22 }}>
            Not your <em>ordinary</em> coffee house. Black Hole is a room built for
            lingering — where the espresso is serious, the lighting is low, and the
            conversation is the point.
          </h2>
        </Reveal>
        <div className="statement-foot">
          <Reveal>
            <p className="statement-p">
              Set inside Montrose, it&rsquo;s a small gravity well for coffee people,
              night owls, and anyone who came to Houston to make something.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p className="statement-p">
              {business.street} · {business.city}, {business.state} {business.zip}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
