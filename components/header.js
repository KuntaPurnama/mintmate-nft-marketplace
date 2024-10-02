import Image from "next/image";
import Link from "next/link";
import { Search } from "@web3uikit/icons";
import styles from "@/styles/Home.module.css";

import { useAddress, ConnectWallet, darkTheme } from "@thirdweb-dev/react";

export default function Header() {
  const address = useAddress();

  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <section className={styles.header}>
      <section className={styles.logo}>
        <Link href="/"></Link>
      </section>
      <section className={styles.nav}>
        <section className={styles.nav_items}>
          <p>COLLECTIONS</p>
          <Link href="/portfolio" className={styles.link}>
            <p>PORTFOLIO</p>
          </Link>
          <p>AIRDROP</p>
        </section>
        <section className={styles.searchSection}>
          <section>
            <span>
              <Search fontSize="25px" />
            </span>
            <input
              placeholder="Search collections and wallets"
              disabled=""
              className={styles.inputField}
            />
          </section>
        </section>
        <ConnectWallet
          btnTitle="Connect"
          theme={darkTheme({
            colors: {
              primaryButtonBg: "#d501a7",
              accentText: "#d501a7",
            },
          })}
        />
      </section>
    </section>
  );
}
