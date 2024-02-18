import styles from "./campaign.module.scss";
import { CampaignModel } from "@/types/campaignModel";
import PrimaryBtn from "../primaryBtn/primaryBtn";
import Badge from "react-bootstrap/Badge";
import Image from "next/image";

export default function Campaign({ props }: { props: CampaignModel }) {
  return (
    <div className={styles.campaignBg} style={{ backgroundImage: `url("${props.backgroundImage}")` }}>
      <div className={styles.campaignBgOverlay}></div>
      <div className={styles.campaignContent}>
        <Badge className={styles.badge}>
          {props.badge.icon !== undefined ? (
            <Image src={props.badge.icon} className={styles.icon} alt={props.title} width={10} height={12} />
          ) : (
            ""
          )}
          <p>{props.badge.text}</p>
        </Badge>

        <div>
          <h6>{props.title}</h6>
          <PrimaryBtn btnIcon={"images/arrow-right.svg"} btnText={"Gå til kampagne"} link={props.url} />
        </div>
      </div>
    </div>
  );
}
