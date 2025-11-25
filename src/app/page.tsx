import styles from './page.module.css';
import ServiceTicker from '@/components/ServiceTicker';
import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.content}>
        <div className={styles.logo}>ATF World</div>

        <h1 className={styles.title}>
          Your Global Gateway to<br />Expert Solutions
        </h1>

        <div className={styles.divider} />

        <p className={styles.subtitle}>
          One platform, infinite possibilities. We are building the future of...
        </p>

        <ServiceTicker />

        <EmailForm />
      </div>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} ATF World. All rights reserved.
      </footer>
    </main>
  );
}
