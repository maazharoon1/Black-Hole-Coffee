import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { menuCategories } from "@/data/menu";

export default function Menu() {
  return (
    <section id="menu" className="section-pad">
      <div className="wrap">
        <Reveal>
          <div className="menu-head">
            <div>
              <p className="label accent">03 — On the Bar</p>
              <h2 className="menu-title" style={{ marginTop: 14 }}>
                The Menu
              </h2>
            </div>
            <p className="statement-p" style={{ maxWidth: 340 }}>
              A working list of what&rsquo;s poured, brewed, and pulled — full details
              in house.
            </p>
          </div>
        </Reveal>

        <div>
          {menuCategories.map((item, i) => (
            <Reveal key={item.index} delay={i % 2 ? 1 : 0}>
              <div className="menu-row">
                <span className="menu-index">{item.index}</span>
                <div className="menu-name-wrap">
                  <span className="menu-name">{item.name}</span>
                  <span className="menu-desc">{item.description}</span>
                </div>
                <span className="menu-arrow">Explore →</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="menu-foot">
            <ArrowLink href="#location">View Full Menu</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
