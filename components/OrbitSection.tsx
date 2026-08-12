import Reveal from "@/components/Reveal";

const ORBIT_WORDS = [
  { label: "Coffee", position: "orbit-pos-right" },
  { label: "People", position: "orbit-pos-bottom" },
  { label: "Ideas", position: "orbit-pos-left" },
  { label: "Houston", position: "orbit-pos-top" },
];

export default function OrbitSection() {
  return (
    <section id="orbit-section" className="section-pad">
      <div className="wrap text-center">
        <Reveal>
          <p className="label accent">05 — The Orbit</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="menu-title" style={{ marginTop: 14 }}>
            Coffee &rarr; Conversation &rarr; Creativity
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="orbit-stage">
            <div className="orbit-center">
              <p className="label">Center of gravity</p>
              <p className="name">Black Hole</p>
            </div>
            <div className="orbit-track" aria-hidden="true">
              {ORBIT_WORDS.map((word) => (
                <span key={word.label} className={`orbit-word ${word.position}`}>
                  {word.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
