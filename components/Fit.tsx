import SectionLabel from "./ui/SectionLabel";
import styles from "./Fit.module.css";

const cards = [
  {
    title: "production agents",
    body: "I build agent systems that operate in production constraints — safety policies, integrations with messy real-world APIs, memory, evals, multi-agent coordination.",
  },
  {
    title: "agentic teams at work",
    body: "At Recurrent (Senior Software Engineer, Dec 2021–May 2026, remote) I did full-stack work on a Rails/GraphQL + Next.js stack and drove team-wide adoption of AI-assisted development: defining specs, success criteria, and prompting patterns for agentic, team-based coding with Claude Code and Anthropic models.",
  },
  {
    title: "between customers and engineering",
    body: "I was CTO and sole architect of RuskinARC, a profitable multi-tenant SaaS platform for historic preservation, for 10+ years — turning client roadmapping sessions into shipped software.",
  },
  {
    title: "teaching & talking",
    body: "3+ years teaching full-time coding bootcamps at Tech Elevator, and talks at PyOhio and CodeMash. Bonus: I'm a longtime improv performer — real-time listening and adapting to humans is a trained skill.",
  },
];

export default function Fit() {
  return (
    <section id="fit" className={`section section-dark ${styles.fit}`}>
      <div className="wrap">
        <div className={styles.label}>
          <SectionLabel>$ cat ~/fit.md</SectionLabel>
        </div>
        <h2>Why Forward Deployed Engineer fits me</h2>
        <p className={styles.intro}>
          This role is &quot;help customers ship agentic AI in the real
          world.&quot; That&apos;s literally what I do.
        </p>
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.body}>{card.body}</p>
            </article>
          ))}
        </div>
        <p className={styles.summary}>
          25+ years · nine employers · Python, TypeScript/Node, Ruby on Rails,
          Java, PHP, Perl · every major web era.
        </p>
      </div>
    </section>
  );
}
