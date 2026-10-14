import Chip from "@/components/ui/Chip";
import Terminal from "@/components/ui/Terminal";
import styles from "./Hero.module.css";

const chips = [
  "Cleveland, OH · remote-friendly",
  "ex-CTO, 10+ yrs SaaS",
  "Claude Code · MCP",
];

export default function Hero() {
  return (
    <header id="about" className={`section-dark ${styles.hero}`}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>
            {"// application: Forward Deployed Engineer"}
          </p>
          <h1 className={styles.title}>
            I don&apos;t just use AI agents.{" "}
            <span className={styles.accent}>I run my life on them.</span>
          </h1>
          <p className={styles.lede}>
            Staff-level full-stack engineer, 25+ years shipping production
            software. These days I design systems where AI agents and humans
            work as one team — for myself, and inside a professional
            engineering org.
          </p>
          <div className={styles.chips}>
            {chips.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
        </div>

        {/* Every line is server-rendered; the typing effect is CSS-only. */}
        <Terminal title="chimpananzaa — session">
          <span className={styles.line}>
            <span className="t-prompt">joe ›</span>{" "}
            <span className="t-white">
              write my about-me page for the FDE role
            </span>
          </span>
          <span className={`t-dim ${styles.line}`}>
            [classifier] complex → background orchestrator
          </span>
          <span className={`t-dim ${styles.line}`}>
            [memory] recalled: 3 projects, 9 employers
          </span>
          <span className={styles.line}>
            <span className="t-key">agent ›</span> Done. Fun fact for the
            reader:{" "}
            <span className={styles.reply}>
              this page was written by an AI agent, about the AI agents he
              builds — for a company whose product works the way he already
              works.
            </span>
          </span>
          <span className={styles.line}>
            <span className="t-prompt">joe ›</span>{" "}
            <span className={`t-cursor ${styles.cursor}`} aria-hidden="true" />
          </span>
        </Terminal>
      </div>
    </header>
  );
}
