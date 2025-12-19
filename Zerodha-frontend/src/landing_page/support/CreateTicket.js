import styles from "./CreateTicket.module.css";

const items = [
  { icon: <i class="fa-solid fa-plus"></i>, title: "Account Opening" },
  { icon: <i class="fa-regular fa-user"></i>, title: "Your Zerodha Account" },
  { icon: <i class="fa-brands fa-uikit"></i>, title: "Kite" },
  { icon: <i class="fa-solid fa-indian-rupee-sign"></i>, title: "Funds" },
  { icon: "database", title: "Console" },
];

function CreateTicket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left section */}
          <div>
            {items.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.itemLeft}>
                  <div className={styles.icon}>({item.icon})</div>
                  <span className={styles.itemTitle}>{item.title}</span>
                </div>
                <span className={styles.chevron}>(chevron)</span>
              </div>
            ))}
          </div>

          {/* Right section */}
          <div>
            <div className={styles.alert}>
              <ul>
                <li>
                  <a href="/">BSE StAR mutual fund platform downtime</a>
                </li>
                <li>
                  <a href="/">
                    Adjustment of F&O contracts of NUVAMA on account of Split
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.quick}>
              <h6>Quick links</h6>
              <ol>
                <li>
                  <a href="/">Track account opening</a>
                </li>
                <li>
                  <a href="/">Track segment activation</a>
                </li>
                <li>
                  <a href="/">Intraday margins</a>
                </li>
                <li>
                  <a href="/">Kite user manual</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
