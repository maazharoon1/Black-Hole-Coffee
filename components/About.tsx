import Image from "next/image";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { aboutImage } from "@/data/gallery";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <div className="about-media">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              style={{ objectFit: "cover" }}
            />
            <span className="about-num">02</span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div>
            <p className="label accent">About</p>
            <h2 className="about-title">
              Enter the <em>orbit.</em>
            </h2>
            <p className="about-copy">
              Step through the door and the outside stops mattering. Black Hole was
              built for the ones who came for one coffee and stayed for three — for the
              low light, the quiet hum of conversation, and a cup poured with real
              attention.
            </p>
            <ArrowLink href="#atmosphere" variant="ghost">
              Discover Black Hole
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
