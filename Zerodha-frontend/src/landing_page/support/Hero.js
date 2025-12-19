import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Support Portal</h2>
          <button className={styles.button}>My tickets</button>
        </div>

        <div className={styles.search}>
          <span className={styles.searchIcon}>(search)</span>
          <input
            type="text"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
