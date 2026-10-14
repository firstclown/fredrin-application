import SectionLabel from "@/components/ui/SectionLabel";
import StatTile from "@/components/ui/StatTile";
import styles from "./Projects.module.css";

type Project = {
  tag: string;
  name: string;
  oneLiner: string;
  bullets: string[];
  stats: { value: string; caption: string }[];
  link?: { label: string; href: string };
};

const projects: Project[] = [
  {
    tag: "01 · personal autonomous agent · in daily use",
    name: "Chimpananzaa",
    oneLiner:
      "A production-grade personal AI agent framework I designed and built solo. It's not a demo — it runs my life every day.",
    bullets: [
      "Zero-dependency agent core with a multi-turn reasoning loop, dynamic tool selection across 25+ tools, and a request classifier that routes simple queries to a fast track and complex tasks to a background orchestrator with parallel subagents",
      "Semantic long-term memory built on Hindsight, with an automated consolidation pipeline (raw → weekly → monthly → patterns), cosine-similarity dedup, and a full MCP server exposing memory as standardized tools",
      "Real safety engineering: severity-tiered prompt-injection detection, an execution-policy engine that blocks dangerous shell operations, path-traversal and input sanitization, token-budget controls",
      "Multi-LLM abstraction (OpenRouter, Groq, Z.ai), CDP browser automation with DOM distillation optimized for LLMs, cron-driven scheduled jobs, and a Telegram interface with voice and vision support",
    ],
    stats: [
      { value: "~10,700", caption: "lines of TypeScript" },
      { value: "91", caption: "modules" },
      { value: "63", caption: "Vitest test files" },
      { value: "25+", caption: "tools" },
    ],
  },
  {
    tag: "02 · open source · agents + humans, one board",
    name: "Work Together Workshop",
    oneLiner: "A kanban board where AI agents and humans share one task board.",
    bullets: [
      "Fastify 5 API, Vue 3 web client, SQLite (drizzle-orm), and a built-in MCP server (Streamable HTTP) exposing 17 tools",
      "AI agents don't just chat about work — they claim tasks off the board, move them through the workflow (claim → in_progress → in_review), check off completion checklists, leave comments, and coordinate with humans and each other",
      "My own agent picks up ready tasks autonomously",
    ],
    stats: [
      { value: "17", caption: "MCP tools" },
      { value: "Fastify 5", caption: "API" },
      { value: "Vue 3", caption: "web client" },
      { value: "SQLite", caption: "drizzle-orm" },
    ],
    link: {
      label: "gitlab.com/firstclown/work-together-workshop →",
      href: "https://gitlab.com/firstclown/work-together-workshop",
    },
  },
  {
    tag: "03 · AI customer-service agent · vet clinics",
    name: "FetchPoint",
    oneLiner:
      "An AI customer-service agent product for independent vet clinics: a multi-channel AI receptionist.",
    bullets: [
      "Web widget, SMS, voice, and WhatsApp, integrated with veterinary practice-management systems (ezyVet, Covetrus Ascend, GVET)",
      "Handles appointment booking, rescheduling, confirmations, and service FAQs while enforcing each clinic's specific SOPs — and it's architected to never give medical advice",
      "Built on an agent engine that orchestrates conversations, calls MCP tools for live clinic data, and routes responses through a judgment/safety layer, with DynamoDB caching, SQS async writes, and webhook HMAC validation",
    ],
    stats: [
      { value: "4", caption: "channels" },
      { value: "3", caption: "practice-management integrations" },
      { value: "MCP", caption: "live clinic data" },
      { value: "0", caption: "medical advice" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="agents" className="section">
      <div className="wrap">
        <SectionLabel>$ ls ~/agents</SectionLabel>
        <h2>The proof: three agent systems, shipped.</h2>
        <p className={styles.sub}>
          Not demos. Systems that run under real constraints — safety policies, messy
          integrations, memory, and agents coordinating with people.
        </p>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div>
              <span className={styles.tag}>{project.tag}</span>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.one}>{project.oneLiner}</p>
              <ul className={styles.bullets}>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  className={styles.link}
                  href={project.link.href}
                  target="_blank"
                  rel="noopener"
                >
                  {project.link.label}
                </a>
              )}
            </div>
            <div className={styles.stats}>
              {project.stats.map((stat) => (
                <StatTile key={stat.caption} value={stat.value} caption={stat.caption} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
