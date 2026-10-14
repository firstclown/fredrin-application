import styles from "./Nav.module.css";

const links = [
  { href: "#about", label: "~/about" },
  { href: "#agents", label: "~/agents" },
  { href: "#fit", label: "~/fit" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#about" className={styles.brand}>
          <b>joseph@erickson</b>:~$
        </a>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta}>
            contact →
          </a>
        </div>
      </div>
    </nav>
  );
}
