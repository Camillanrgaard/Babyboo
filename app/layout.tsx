"use client";
/* Components */
import { Providers } from "@/lib/providers";
import { NavBar } from "./components/Nav";

/* Instruments */
import "./styles/globals.scss";
import styles from "./styles/layout.module.scss";
import Footer from "./components/footer";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <NavBar />
          <main className={styles.main}>{props.children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
