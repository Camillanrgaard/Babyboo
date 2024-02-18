"use client";
import styles from "../styles/layout.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.topbanner}>Babyboo for professionals</div>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={`${pathname === "/" ? styles.active : ""}`} href="/">
            <Image src="./../images/logo.svg" width={127} height={47} alt="babyboo logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.burgerMenu} />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link className={`${styles.link} ${pathname === "/series" ? styles.active : ""}`} href="/series">
                Serier
              </Nav.Link>
              <Nav.Link className={`${styles.link} ${pathname === "/cradle" ? styles.active : ""}`} href="/cradle">
                Vugge
              </Nav.Link>
              <Nav.Link className={`${styles.link} ${pathname === "/kidsbeds" ? styles.active : ""}`} href="/kidsbeds">
                Børnesenge
              </Nav.Link>
              <Nav.Link className={`${styles.link} ${pathname === "/storage" ? styles.active : ""}`} href="/storage">
                Opbevaring
              </Nav.Link>
              <Nav.Link
                className={`${styles.link} ${pathname === "/highchair" ? styles.active : ""}`}
                href="/highchair"
              >
                Højstol
              </Nav.Link>
              <Nav.Link
                className={`${styles.link} ${pathname === "/changingtable" ? styles.active : ""}`}
                href="/changingtable"
              >
                Pusle
              </Nav.Link>
              <Nav.Link className={`${styles.link} ${pathname === "/textiles" ? styles.active : ""}`} href="/textiles">
                Tekstiler
              </Nav.Link>
              <Nav.Link
                className={`${styles.link} ${pathname === "/accessories" ? styles.active : ""}`}
                href="/accessories"
              >
                Tilbehør
              </Nav.Link>
              <Nav.Link
                className={`${styles.link} ${pathname === "/spareparts" ? styles.active : ""}`}
                href="/spareparts"
              >
                Reservedele
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
