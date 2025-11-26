import styles from './page.module.css';
import WhatsAppButton from '@/components/WhatsAppButton';

const services = [
  { name: "Engineering & BIM", icon: "🏗️" },
  { name: "Education & Learning", icon: "📚" },
  { name: "Food & Agriculture", icon: "🌾" },
  { name: "Legal & Immigration", icon: "⚖️" },
  { name: "Medical Tourism", icon: "🏥" },
  { name: "Digital & Tech", icon: "💻" },
  { name: "Emotional Wellness", icon: "🧘" },
  { name: "Logistics & Equipment", icon: "🚚" },
  { name: "Tourism & Fashion", icon: "✈️" },
  { name: "Accounting & Finance", icon: "💰" },
  { name: "Growth Engineering", icon: "📈" },
  { name: "Other Solutions", icon: "⭐" }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>Launching Soon</div>

        <div className={styles.logoContainer}>
          <img
            src="/ATF-V1-online-video-cutter.com_.gif"
            alt="ATF World Logo"
            className={styles.logoGif}
          />
        </div>

        <h1 className={styles.title}>
          Your Global Gateway to<br />
          <span className={styles.highlight}>Expert Solutions</span>
        </h1>

        <p className={styles.subtitle}>
          One platform, infinite possibilities. Connecting you with world-class expertise across industries.
        </p>

        {/* Featured BIM Service */}
        <div className={styles.featuredService}>
          <div className={styles.featuredBadge}>Featured Service</div>
          <span className={styles.featuredIcon}>🏗️</span>
          <h3 className={styles.featuredTitle}>Engineering & BIM</h3>
          <p className={styles.featuredDescription}>
            Expert BIM solutions for modern construction - Steel detailing, MEP, Rebar, and full project modeling
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.slice(1).map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <span className={styles.serviceIcon}>{service.icon}</span>
              <span className={styles.serviceName}>{service.name}</span>
            </div>
          ))}
        </div>

        <WhatsAppButton />
      </div>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} ATF World. All rights reserved.
      </footer>
    </main>
  );
}
