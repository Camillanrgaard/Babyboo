import styles from "./footerCta.module.scss";
import { FooterCTAModel } from "@/types/footerCtaModel";
import Image from "next/image";
import PrimaryBtn from "../primaryBtn/primaryBtn";

export default function FooterCTA({ props }: { props: FooterCTAModel }) {
  return (
    <div className={styles.ctaCard}>
      <Image src={props.icon} className={styles.icon} alt={props.title} width={10} height={12} />
      <h5>{props.title}</h5>
      <PrimaryBtn btnIcon={props.btnIcon} btnText={props.btnText} link={props.url} />
    </div>
  );
}
