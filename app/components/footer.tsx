import FooterCTA from "@/app/components/footerCta/footerCta";
import { FooterCTAModel } from "@/types/footerCtaModel";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/layout.module.scss";

var footer: FooterCTAModel[] = [
  {
    icon: "images/pos-order.svg",
    title: "POS bestilling",
    url: "xflow.dk",
    btnText: "Gå til",
    btnIcon: "images/arrow-right.svg",
  },
  {
    icon: "images/image-pack.svg",
    title: "Billedepakke",
    url: "xflow.dk",
    btnText: "Download",
    btnIcon: "images/download.svg",
  },
  {
    icon: "images/some-campaign.svg",
    title: "SOME kampagner",
    url: "xflow.dk",
    btnText: "Download",
    btnIcon: "images/download.svg",
  },
  {
    icon: "images/spareparts.svg",
    title: "Reservedele",
    url: "xflow.dk",
    btnText: "Gå til",
    btnIcon: "images/arrow-right.svg",
  },
];

export default function Footer() {
  return (
    <div className={styles.ctaBg}>
      <Container className={styles.container}>
        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <Row>
              <Col xs={12}>
                <h4>
                  Dine forhandler ressourcer for <b>DYLAND puslepude</b>
                </h4>
              </Col>
            </Row>
            <Row>
              {footer.map((footerCta) => (
                <Col className={styles.ctaCards} xs={6} md={3}>
                  <FooterCTA props={footerCta} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
