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

        {/* BIM Expertise Section */}
        <div className={styles.bimSection}>
          <h2 className={styles.bimSectionTitle}>
            Our Expertise in <span className={styles.bimHighlight}>BIM</span>
          </h2>
          <p className={styles.bimIntro}>
            ATF World offers comprehensive Building Information Modeling services that span the entire project lifecycle.
            Our BIM solutions enhance coordination, reduce conflicts, and accelerate project delivery while maintaining
            the highest standards of accuracy.
          </p>

          <div className={styles.bimServicesGrid}>
            <div className={styles.bimCard}>
              <div className={styles.bimIcon}>🏗️</div>
              <h3 className={styles.bimCardTitle}>BIM Consulting</h3>
              <p className={styles.bimCardDesc}>
                Strategic guidance for successful BIM implementation, workflow optimization, and technology adoption across your organization.
              </p>
            </div>

            <div className={styles.bimCard}>
              <div className={styles.bimIcon}>🏛️</div>
              <h3 className={styles.bimCardTitle}>Architectural BIM</h3>
              <p className={styles.bimCardDesc}>
                Detailed design modeling that captures every architectural element with precision for seamless coordination.
              </p>
            </div>

            <div className={styles.bimCard}>
              <div className={styles.bimIcon}>🔧</div>
              <h3 className={styles.bimCardTitle}>Structural BIM</h3>
              <p className={styles.bimCardDesc}>
                Engineering-grade structural models with complete detailing for steel, concrete, and composite systems.
              </p>
            </div>

            <div className={styles.bimCard}>
              <div className={styles.bimIcon}>🚧</div>
              <h3 className={styles.bimCardTitle}>Civil & Utilities BIM</h3>
              <p className={styles.bimCardDesc}>
                Comprehensive infrastructure planning including site development, grading, and utility coordination.
              </p>
            </div>

            <div className={styles.bimCard}>
              <div className={styles.bimIcon}>⚡</div>
              <h3 className={styles.bimCardTitle}>MEP(F) BIM</h3>
              <p className={styles.bimCardDesc}>
                Integrated modeling of mechanical, electrical, plumbing, and fire protection systems with clash detection and resolution.
              </p>
            </div>
          </div>
        </div>

        <WhatsAppButton />
      </div>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} ATF World. All rights reserved.
      </footer>
    </main>
  );
}
