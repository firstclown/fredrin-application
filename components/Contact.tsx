import SectionLabel from "./ui/SectionLabel";
import Terminal from "./ui/Terminal";
import styles from "./Contact.module.css";

const links = [
  { key: "email", label: "joe@jerickson.net", href: "mailto:joe@jerickson.net" },
  { key: "web", label: "jerickson.net", href: "https://jerickson.net" },
  {
    key: "linkedin",
    label: "linkedin.com/in/josepherickson",
    href: "https://linkedin.com/in/josepherickson",
  },
  { key: "github", label: "github.com/firstclown", href: "https://github.com/firstclown" },
  { key: "gitlab", label: "gitlab.com/firstclown", href: "https://gitlab.com/firstclown" },
];

function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {};
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionLabel>$ whoami --contact</SectionLabel>
        <h2>Let&apos;s ship some agents.</h2>
        <div className={styles.block}>
          <Terminal title="contact">
            {links.map((link) => (
              <span key={link.key} className={styles.row}>
                <span className={styles.key}>{link.key}</span>
                <a href={link.href} className={styles.value} {...externalProps(link.href)}>
                  {link.label}
                </a>
              </span>
            ))}
          </Terminal>
          <a href="mailto:joe@jerickson.net" className={styles.cta}>
            Email Joe →
          </a>
        </div>
        <footer className={styles.footer}>
          Joseph Erickson · Cleveland, OH · written by an AI agent, reviewed by a
          human.
        </footer>
      </div>
    </section>
  );
}
