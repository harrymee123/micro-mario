import styles from "../styles/Mario.module.css";

const Mario = () => {
  return (
    <main className={styles.main}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        alt="Mario"
        width={240}
        height={413}
      />
      <h1 className={styles.title}>G'day! I'ma Mario.</h1>
      <span>
        I'm hosted at
        <a
          target="_blank"
          href="https://micro-mario-46q24z3yb-harrymee94-gmailcom.vercel.app/mario"
        >
          https://micro-mario-46q24z3yb-harrymee94-gmailcom.vercel.app/mario
        </a>
      </span>
    </main>
  );
};

export default Mario;
