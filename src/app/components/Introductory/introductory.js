import styles from './_Introductory.module.scss';

const Introductory = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.trychenge}>Welcome to MinnA</h1>
        <p>MINNA is the first officially established interdisciplinary artistic and cultural network, aiming at building an Independent Egyptian Cultural System at the national level in Egypt.</p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Upcoming Events</button>
          <button className={styles.secondaryButton}>About MinnA</button>
        </div>
      </div>
    </section>
  );
};

export default Introductory;
